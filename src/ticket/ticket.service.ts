import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Ticket } from './entity/ticket.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entity/event.entity';
import { CreateTicketDto } from './dtos/create-ticket.dto';
import { DisplayEventsDto } from './dtos/display-events.dto';
import { EventStats } from './EventStats';
import { BarcodeMissingException } from './exceptions/BarcodeMissing.exception';
import { TicketStatus } from './TicketStatus';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async display(): Promise<DisplayEventsDto> {
    let tickets: Ticket[];
    const events = await this.eventRepository.find();
    const allEventStats: EventStats[] = [];

    for (const event of events) {
      tickets = await this.ticketRepository.findBy({
        eventReference: event.id,
      });

      const statsForCurrentEvent = this.compileStats(tickets, event);
      allEventStats.push(statsForCurrentEvent);
    }
    return new DisplayEventsDto(allEventStats);
  }

  private compileStats(tickets: Ticket[], event: Event): EventStats {
    let numberOfSoldTickets = 0;
    let numberOfValidatedTickets = 0;
    let numberOfCancelledTickets = 0;
    const stats = new EventStats();
    stats._event = event;
    for (const ticket of tickets) {
      stats._numberOfTickets = stats._numberOfTickets + 1;
      if (ticket.ticketStatus == TicketStatus.SOLD) {
        numberOfSoldTickets = numberOfSoldTickets + 1;
      }
      if (ticket.ticketStatus == TicketStatus.VALIDATED) {
        numberOfValidatedTickets = numberOfValidatedTickets + 1;
      }
      if (ticket.ticketStatus == TicketStatus.CANCELLED) {
        numberOfCancelledTickets = numberOfCancelledTickets + 1;
      }
    }

    stats._percentageSold =
      (numberOfSoldTickets / stats._numberOfTickets) * 100;
    stats._percentageValidated =
      (numberOfValidatedTickets / stats._numberOfTickets) * 100;
    stats._percentageCancelled =
      (numberOfCancelledTickets / stats._numberOfTickets) * 100;

    return stats;
  }

  async validate(id: number): Promise<Ticket> {
    const ticket: Ticket = await this.ticketRepository.findOneBy({
      id: id,
    });

    if (ticket == null) {
      throw new NotFoundException();
    }

    const event: Event = await this.eventRepository.findOneBy({
      id: ticket.eventReference,
    });

    if (!event.hasBarcode) {
      throw new BarcodeMissingException(event.eventInfo);
    }

    ticket.ticketStatus = TicketStatus.VALIDATED;
    await this.ticketRepository.save(ticket);
    return ticket;
  }

  async load(createTicketDto: CreateTicketDto) {
    const numberOfIdenticalTickets = await this.ticketRepository.countBy({
      validationCode: createTicketDto.validationCode,
      eventReference: createTicketDto.eventReference,
    });

    if (numberOfIdenticalTickets > 0) {
      throw new ConflictException();
    }

    const ticket = this.ticketRepository.create(createTicketDto);
    ticket.ticketStatus = TicketStatus.SOLD;
    return this.ticketRepository.save(ticket);
  }
}
