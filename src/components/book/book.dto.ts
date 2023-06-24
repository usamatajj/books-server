import {
    IsNotEmpty,
    IsEmail,
    Matches,
    IsString,
    IsOptional,
    IsLowercase,
    IsBoolean,
    IsArray,
    IsIn
} from 'class-validator';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';


export class AddBookDto {
    @ApiProperty({ example: 'Punjab' })
    @IsNotEmpty()
    @IsString()
    bookName: string

    @ApiProperty({ example: 'base64' })
    @IsNotEmpty()
    @IsString()
    image: string
    

    @ApiProperty({ example: 'johnny' })
    @IsString()
    author: string

    @ApiProperty({ example: 'jfsdlakdfs' })
    @IsString()
    boardId: string


    @ApiProperty({ example: 'dsafdfsdaf' })
    @IsString()
    classId: string

    
    @ApiProperty({ example: '2132' })
    @IsString()
    quantityAvailable: number

}

export class UpdateBookDto {
    @ApiProperty({ example: '_id here' })
    @IsNotEmpty()
    @IsString()
    _id: string

    @ApiProperty({ example: 'Punjab' })
    @IsNotEmpty()
    @IsString()
    bookName: string

    @ApiProperty({ example: 'base64' })
    @IsNotEmpty()
    @IsString()
    image: string
    

    @ApiProperty({ example: 'johnny' })
    @IsString()
    author: string

    @ApiProperty({ example: 'jfsdlakdfs' })
    @IsString()
    boardId: string


    @ApiProperty({ example: 'dsafdfsdaf' })
    @IsString()
    classId: string

    
    @ApiProperty({ example: '2132' })
    @IsString()
    quantityAvailable: number

}

export class DeleteBookDto {
    @ApiProperty({ example: '_id here' })
    @IsNotEmpty()
    @IsString()
    _id: string

}


