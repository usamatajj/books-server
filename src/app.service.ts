import { Get, Injectable } from '@nestjs/common';

import { ApiTags, ApiOkResponse, ApiCreatedResponse, ApiBody,ApiResponse, ApiOperation, ApiHideProperty } from '@nestjs/swagger';

@Injectable()
export class AppService {

@Get()
  getHello(): string 
  
  {
    return 'Book Server Running';
  }
}
