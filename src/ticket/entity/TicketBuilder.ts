import { Ticket } from './ticket.entity';

export class TicketBuilder {
  private readonly _ticket: Ticket;

  constructor() {
    this._ticket = new Ticket();
  }

  validationCode(validationCode: string): TicketBuilder {
    this._ticket.validationCode = validationCode;
    return this;
  }

  ticketStatus(ticketStatus: string): TicketBuilder {
    this._ticket.ticketStatus = ticketStatus;
    return this;
  }

  eventReference(eventReference: string): TicketBuilder {
    this._ticket.eventReference = eventReference;
    return this;
  }

  build(): Ticket {
    return this._ticket;
  }
}
