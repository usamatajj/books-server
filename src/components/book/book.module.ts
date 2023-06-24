import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [BookController],
  providers: [BookService,UserService]
})
export class BookModule {}
