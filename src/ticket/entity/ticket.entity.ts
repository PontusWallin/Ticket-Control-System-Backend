import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ticket {
  constructor() {
    this.ticketInformation = 'ticketInformation';
    this.validationCode = 'validationCode';
    this.ticketStatus = 'ticketStatus';
    this.eventReference = 0;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, name: 'ticket_information' })
  ticketInformation: string;

  @Column({ length: 25, name: 'validation_code' })
  validationCode: string;

  @Column({ length: 10, name: 'ticket_status' })
  ticketStatus: string;

  @Column({ name: 'event_reference' })
  eventReference: number;
}
