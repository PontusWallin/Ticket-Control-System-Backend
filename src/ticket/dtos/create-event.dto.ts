import { IsString } from "class-validator";

export class CreateTicketDto {
  @IsString()
  ticketInformation: string;

  @IsString()
  validationCode: string;

  @IsString()
  ticketStatus: string;

  @IsString()
  eventReference: string;
}
