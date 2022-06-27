import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ticket {
  constructor() {
    this.ticketInformation = 'ticketInformation';
    this.validationCode = 'validationCode';
    this.ticketStatus = 'ticketStatus';
    this.eventReference = 'eventReference';
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ticketInformation: string;

  @Column()
  validationCode: string;

  @Column()
  ticketStatus: string;

  @Column()
  eventReference: string;
}
