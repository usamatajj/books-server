import {
  IsNotEmpty,
  IsEmail,
  Matches,
  IsString,
  IsOptional,
  IsLowercase,
  IsBoolean,
  IsArray,
  IsIn,
} from 'class-validator';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';

export class AddBoardDto {
  @ApiProperty({ example: 'Punjab' })
  @IsNotEmpty()
  @IsString()
  boardName: string;

  @ApiProperty({ example: 'base64' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: 'This is test board' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'The Punjab' })
  @IsNotEmpty()
  @IsString()
  region: string;
}

export class UpdateBoardDto {
  @ApiProperty({ example: '_id here' })
  @IsNotEmpty()
  @IsString()
  _id: string;

  @ApiProperty({ example: 'Punjab' })
  @IsNotEmpty()
  @IsString()
  boardName: string;

  @ApiProperty({ example: 'base64' })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({ example: 'This is test board' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ example: 'The Punjab' })
  @IsNotEmpty()
  @IsString()
  region: string;
}

export class DeleteBoardDto {
  @ApiProperty({ example: '_id here' })
  @IsNotEmpty()
  @IsString()
  _id: string;
}
