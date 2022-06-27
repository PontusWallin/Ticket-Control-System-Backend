import { EventStats } from '../EventStats';

export class DisplayEventsDto {
  constructor(eventStats: EventStats[]) {
    this.eventStats = eventStats;
  }

  private eventStats: EventStats[];
}
