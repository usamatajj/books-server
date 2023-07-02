import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from 'src/Models/Book';
import { AddBookDto, UpdateBookDto , DeleteBookDto } from './book.dto';
import { existsSync } from 'fs';
import {join} from 'path'

@Injectable()
export class BookService {

  async getAll() {
    let entity = await Book.find({});
    return { status: 200, data: entity };
  }

  async getByBoard(req) {
    let entity = await Book.find({boardId: req.query.boardId});
    return { status: 200, data: entity };
  }

  async getByClass(req) {
    let entity = await Book.find({classId: req.query.classId});
    return { status: 200, data: entity };
  }

  async getByClassAndBoard(req) {
    let entity = await Book.find({boardId: req.query.boardId, classId: req.query.classId});
    return { status: 200, data: entity };
  }

  async add(obj: AddBookDto, files) {
    try{
      if(!files || !files.file || !files.preview ) {
        return { status: 500 , message : "Please Upload file and preview correctly"}
      }
  
      let entity = new Book(obj);
      entity.pdfPath = files.file[0].path
      entity.previewPath = files.preview[0].path
  
      await entity.save()
      return {status : 200, message :"Entity Saved Successfully!"}
    }catch(err) {
      return {status : 500, message : err.message}
    }
  
  }

  async delete(obj: DeleteBookDto) {
    let entity = await Book.deleteOne({_id: obj._id});
    return {status : 200 , message: "Entity deleted successfully"}
  }

  async update(obj: UpdateBookDto) {
    let entity = await Book.updateOne({_id: obj._id}, obj);
    return {status : 200 , message: "Entity updated successfully"}
  }

  async downloadPdfByPath(path, res) {
    try{
      const rootFolder = process.cwd();
      const filePath = join(rootFolder, path);
      if (existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        throw new NotFoundException('File not found');
      }
    }catch(err) {
      return {status : 500 , message : err.message}

    }
  
  }
}
