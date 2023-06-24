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
import { BoardService } from './board.service';
import {
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../../helper-functions/auth.guard';
import { AddBoardDto, UpdateBoardDto, DeleteBoardDto } from './board.dto';

@ApiTags('board')
@Controller('board')
export class BoardController {
  constructor(private readonly service: BoardService) {}

  @UseGuards(AuthGuard)
  @Post('/add')
  async add(@Body() obj: AddBoardDto, @Response() res, @Request() req) {
    const response = await this.service.add(obj);
    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update')
  async update(@Body() obj: UpdateBoardDto, @Response() res, @Request() req) {
    const response = await this.service.update(obj);

    return res.status(HttpStatus.OK).json({
      ...response,
    });
  }

  @UseGuards(AuthGuard)
  @Post('/delete')
  async delete(@Body() obj: DeleteBoardDto, @Response() res, @Request() req) {
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
