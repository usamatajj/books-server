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
  UploadedFile,
  UseInterceptors,
  UploadedFiles
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { BookService } from './book.service';
import {
  ApiTags,
  ApiQuery
} from '@nestjs/swagger';

import { AuthGuard } from '../../helper-functions/auth.guard';
import { AddBookDto, UpdateBookDto, DeleteBookDto, UploadPdfDto } from './book.dto';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly service: BookService) {}

  // @UseGuards(AuthGuard)
  @Post('/add')
  @UseInterceptors(FileFieldsInterceptor([
  { name: 'file', maxCount: 1, },
  { name: 'preview', maxCount: 1 },
],{
  storage: diskStorage({
    destination: './uploads/books', // Specify your desired upload directory
    filename: (req, file, callback) => {
      const randomName = Array(10).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
      return callback(null, `${randomName}${extname(file.originalname)}`);
    },
  }),
} ))
  async add(
    @UploadedFiles() files : UploadPdfDto,
    @Body() formData: AddBookDto,
    @Response() res
  ) {
    const response = await this.service.add(formData, files);
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

  // @UseGuards(AuthGuard)
  @ApiQuery({ name: 'path', required: true, description: 'uploads/books/7482ebba16.pdf' })
  @Get('/get-pdf')
  async getPdf(@Response() res, @Request() req) {
    const response = await this.service.downloadPdfByPath(req.query.path,res);
    return response
  }
}
