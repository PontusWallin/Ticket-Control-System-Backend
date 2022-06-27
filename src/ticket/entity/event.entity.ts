import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  constructor() {
    this.eventInfo = 'eventInformation';
    this.eventLocation = 'eventLocation';
    this.timeOfEvent = null;
    this.hasBarcode = true;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'has_barcode' })
  hasBarcode: boolean;

  @Column({ length: 255, name: 'event_info' })
  eventInfo: string;

  @Column({ length: 50, name: 'event_location' })
  eventLocation: string;

  @Column({ name: 'time_of_event' })
  timeOfEvent: Date;
}
