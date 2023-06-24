import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { urlencoded, json } from 'express';
import { setupSwagger } from '../swagger.config';
import path from 'path'
import { ValidationPipe } from '@nestjs/common';
dotenv.config()
const connectMongoDB = require('./helper-functions/db');

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  let port = 7777

  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  connectMongoDB();

  // Apply ValidationPipe globally
  app.useGlobalPipes(new ValidationPipe({ skipMissingProperties: false }))


  setupSwagger(app);
  await app.listen(port, () => {
    console.log("The HomoCook Server has been started at port ", port)
  });
}

bootstrap();
