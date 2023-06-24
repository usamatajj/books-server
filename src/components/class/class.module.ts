import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { UserService } from '../user/user.service';

@Module({
  controllers: [ClassController],
  providers: [ClassService,UserService]
})
export class ClassModule {}
