import {
  Body,
  Controller,
  Post,
  Response,
  Request,
  HttpStatus,
  Get,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ClassService } from './class.service';
import {
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../../helper-functions/auth.guard';
import { AddClassDto , UpdateClassDto , DeleteClassDto } from './class.dto';

@ApiTags('class')
@Controller('class')
export class ClassController {
  constructor(private readonly service: ClassService) {}

  @UseGuards(AuthGuard)
  @Post('/add')
  async add(@Body() obj: AddClassDto, @Response() res, @Request() req) {
    const response = await this.service.add(obj);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update')
  async update(@Body() obj: UpdateClassDto, @Response() res, @Request() req) {
    const response = await this.service.update(obj);

    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/delete')
  async delete(@Body() obj: DeleteClassDto, @Response() res, @Request() req) {
    const response = await this.service.delete(obj);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Get('/')
  async get(@Response() res, @Request() req) {
    const response = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }
}
