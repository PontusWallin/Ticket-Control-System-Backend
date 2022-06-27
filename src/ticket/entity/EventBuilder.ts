import { Event } from './event.entity';

export class EventBuilder {
  private readonly _event: Event;

  constructor() {
    this._event = new Event();
  }

  validationCode(eventInfo: string): EventBuilder {
    this._event.eventInfo = eventInfo;
    return this;
  }

  eventReference(eventLocation: string): EventBuilder {
    this._event.eventLocation = eventLocation;
    return this;
  }

  ticketStatus(timeOfEvent: Date): EventBuilder {
    this._event.timeOfEvent = timeOfEvent;
    return this;
  }

  build(): Event {
    return this._event;
  }
}
