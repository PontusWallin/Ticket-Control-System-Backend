import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTicketDto {
  @ApiProperty()
  @IsString()
  ticketInformation: string;

  @ApiProperty()
  @IsString()
  validationCode: string;

  @ApiProperty()
  @IsString()
  eventReference: number;
}
