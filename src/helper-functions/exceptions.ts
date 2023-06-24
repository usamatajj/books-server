import {
    NotAcceptableException,
    NotFoundException,
    InternalServerErrorException,
    ConflictException,
    UnprocessableEntityException,
    BadRequestException,
    ForbiddenException,
    UnauthorizedException,
  } from '@nestjs/common'
  
  export class Exceptions {
    static sendNotAcceptableException(message: string) {
      throw new NotAcceptableException({ status: 406, message })
    }
  
    static sendNotFoundException(message: string) {
      throw new NotFoundException({ status: 404, message })
    }
  
    static sendInternalServerErrorException(message: string) {
      throw new InternalServerErrorException({ status: 500, message })
    }
  
    static sendConflictException(message: string) {
      throw new ConflictException({ status: 409, message })
    }
  
    static sendUnprocessableEntityException(message: string) {
      throw new UnprocessableEntityException({ status: 422, message })
    }
  
    static sendBadRequestException(message: string) {
      throw new BadRequestException({ status: 400, message })
    }
  
    static sendSuccessRequestException(message: string) {
      throw new BadRequestException({ status: 200, message })
    }
  
    static sendBadRequestError(message: string, data: any) {
      //throw new BadRequestException({ status: 400, message, data })
      throw new BadRequestException({ status: 400, message, data })
    }
  
    static sendForbiddenException(message: string) {
      throw new ForbiddenException({ status: 403, message })
    }
  
    static sendUnauthorizedException(message: string) {
      throw new UnauthorizedException({ status: 401, message })
    }
  }
  