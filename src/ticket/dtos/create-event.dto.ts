import { IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  eventInfo: string;

  @ApiProperty()
  @IsString()
  eventLocation: string;

  @ApiProperty()
  @IsDate()
  timeOfEvent: Date;
}
