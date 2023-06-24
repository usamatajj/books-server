import { Injectable } from '@nestjs/common';
import { AddBoardDto, DeleteBoardDto, UpdateBoardDto } from './board.dto';
import { Board } from 'src/Models/Board';


@Injectable()
export class BoardService {

  async getAll() {
    let entity = await Board.find({});
    return { status: 200, data: entity };
  }

  async add(obj: AddBoardDto) {
    let entity = new Board(obj);
    await entity.save()
    return {status : 200, message :"Board Saved Successfully!"}
  }

  async delete(obj: DeleteBoardDto) {
    let entity = await Board.deleteOne({_id: obj._id});
    return {status : 200 , message: "Entity deleted successfully"}
  }

  async update(obj: UpdateBoardDto) {
    let entity = await Board.updateOne({_id: obj._id}, obj);
    return {status : 200 , message: "Entity updated successfully"}
  }
}
