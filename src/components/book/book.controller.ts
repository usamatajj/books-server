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
import { BookService } from './book.service';
import {
  ApiTags,
  ApiQuery
} from '@nestjs/swagger';
import { AuthGuard } from '../../helper-functions/auth.guard';
import { AddBookDto, UpdateBookDto, DeleteBookDto } from './book.dto';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  @UseGuards(AuthGuard)
  @Post('/add')
  async add(@Body() obj: AddBookDto, @Response() res, @Request() req) {
    const response = await this.service.add(obj);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update')
  async update(@Body() obj: UpdateBookDto, @Response() res, @Request() req) {
    const response = await this.service.update(obj);

    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/delete')
  async delete(@Body() obj: DeleteBookDto, @Response() res, @Request() req) {
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

  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'boardId', required: true, description: 'dasfdsafsa' })
  @Get('/by-board')
  async getByBoard(@Response() res, @Request() req) {
    const response = await this.service.getByBoard(req);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'classId', required: true, description: 'fasdfsafsa' })
  @Get('/by-class')
  async getByClass(@Response() res, @Request() req) {
    const response = await this.service.getByClass(req);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'boardId', required: true, description: 'dasfdsafsa' })
  @ApiQuery({ name: 'classId', required: true, description: 'fasdfsafsa' })
  @Get('/by-class-and-board')
  async getByClassAndBoard(@Response() res, @Request() req) {
    const response = await this.service.getByClassAndBoard(req);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }
}
