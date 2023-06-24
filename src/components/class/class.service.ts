import { Injectable } from '@nestjs/common';
import { AddClassDto, UpdateClassDto , DeleteClassDto } from './class.dto';
import { Class } from 'src/Models/Class';


@Injectable()
export class ClassService {

  async getAll() {
    let entity = await Class.find({});
    return { status: 200, data: entity };
  }

  async add(obj: AddClassDto) {
    let entity = new Class(obj);
    await entity.save()
    return {status : 200, message :"Entity Saved Successfully!"}
  }

  async delete(obj: DeleteClassDto) {
    let entity = await Class.deleteOne({_id: obj._id});
    return {status : 200 , message: "Entity deleted successfully"}
  }

  async update(obj: UpdateClassDto) {
    let entity = await Class.updateOne({_id: obj._id}, obj);
    return {status : 200 , message: "Entity updated successfully"}
  }
}
