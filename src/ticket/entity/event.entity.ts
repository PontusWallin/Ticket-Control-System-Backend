export class Event {
  constructor() {
    this.eventInfo = 'eventInformation';
    this.eventLocation = 'eventLocation';
    this.timeOfEvent = null;
  }

  eventInfo: string;
  eventLocation: string;
  timeOfEvent: Date;
}
