import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const setupSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Book-Server')
    .setDescription('API description')
    .setVersion('1.0')
    .build();


    const customOptions = {
      swaggerOptions: {
        docExpansion: 'none', // Hide response examples and descriptions
        defaultModelsExpandDepth: -1, // Hide model examples and descriptions
      },
    };
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document, customOptions);
};
