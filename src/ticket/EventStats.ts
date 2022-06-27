import { Event } from './entity/event.entity';
export class EventStats {
  public _event: Event;

  public _numberOfTickets = 0;

  public _percentageSold = 0;
  public _percentageValidated = 0;
  public _percentageCancelled = 0;
}
