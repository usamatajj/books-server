import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { setupSwagger } from '../swagger.config';
import { UserModule } from './components/user/user.module';


import { UserService } from './components/user/user.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {

 
 }
