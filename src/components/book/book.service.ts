import { Injectable } from '@nestjs/common';
import { Book } from 'src/Models/Book';
import { AddBookDto, UpdateBookDto , DeleteBookDto } from './book.dto';

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

  async add(obj: AddBookDto) {
    let entity = new Book(obj);
    await entity.save()
    return {status : 200, message :"Board Saved Successfully!"}
  }

  async delete(obj: DeleteBookDto) {
    let entity = await Book.deleteOne({_id: obj._id});
    return {status : 200 , message: "Entity deleted successfully"}
  }

  async update(obj: UpdateBookDto) {
    let entity = await Book.updateOne({_id: obj._id}, obj);
    return {status : 200 , message: "Entity updated successfully"}
  }
}
