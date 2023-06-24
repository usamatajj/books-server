import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './components/board/board.module';
import { UserModule } from './components/user/user.module';
import { UserService } from './components/user/user.service';
import { ClassModule } from './components/class/class.module';
import { BookModule } from './components/book/book.module';

@Module({
  imports: [UserModule, BoardModule, BookModule, ClassModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {

 
 }
