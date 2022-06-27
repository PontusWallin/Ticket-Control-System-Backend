import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dtos/create-ticket.dto';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Get('display')
  displayTicket() {
    return this.ticketService.display();
  }

  @Put('validate/:id')
  validateTicket(@Param('id') id: number) {
    return this.ticketService.validate(id);
  }

  @Post('load')
  loadTicket(@Body() body: CreateTicketDto) {
    return this.ticketService.load(body);
  }
}
