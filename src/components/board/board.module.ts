import { Module } from '@nestjs/common';
import { BoardController } from './board.contoller';
import { BoardService } from './board.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [BoardController],
  providers: [BoardService,UserService]
})
export class BoardModule {}
