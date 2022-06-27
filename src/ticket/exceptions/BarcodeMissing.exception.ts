import { HttpException, HttpStatus } from '@nestjs/common';

export class BarcodeMissingException extends HttpException {
  constructor(eventInfo: string) {
    super(
      'Barcode Missing For Event: "' + eventInfo + '"',
      HttpStatus.BAD_REQUEST,
    );
  }
}
