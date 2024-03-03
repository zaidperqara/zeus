import { HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

export abstract class ControllerBase {
  sendResponse(
    data: any,
    message: string = '',
    statusCode: HttpStatus = HttpStatus.OK,
    @Res() response?: Response,
  ): any {
    return response
      .status(statusCode)
      .send({ success: true, data: data, message: message });
  }

  sendError(
    message: string = 'error',
    statusCode: HttpStatus = HttpStatus.BAD_REQUEST,
    @Res() response?: Response,
  ): NonNullable<any> {
    return response
      .status(statusCode)
      .send({ success: false, data: {}, message: message });
  }
}
