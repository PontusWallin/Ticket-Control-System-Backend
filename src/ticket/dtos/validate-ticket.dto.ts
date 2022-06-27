import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ValidateTicketDto {
  @ApiProperty()
  @IsNumber()
  eventReference: number;
}
