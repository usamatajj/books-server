import { Injectable } from '@nestjs/common';
import { LoginDTO, SignupDto } from './user.dto';
import { User } from 'src/Models/User';
import {
  sendVerificationCode,
  verifyVerificationCode,
} from '../../helper-functions/twilio';
import { getToken } from 'src/helper-functions/getToken';


@Injectable()
export class UserService {
  async getAll() {
    let users = await User.find({});
    return { status: 200, data: users };
  }

  async signup(obj: SignupDto) {
    let already = await User.findOne({ phone: obj.phone });
    if (already) {
      return { status: 200, message: 'User already exists' };
    }
    let user = new User(obj);
    await user.save();

    return { status: 200, message: 'User Sign up successful' };
  }

  async getUserInfo(phone) {
    let user = await User.findOne({ phone });
    return { status :200 , data :user }
  }

  async getCheatToken(phone) {
    let user = await User.findOne({ phone });
     let token = getToken(phone)
     
    return { status :200 , message: "approved", token }
  }

  async login(obj: LoginDTO) {
        let user = await User.findOne({ phone: obj.mobile });
        if (user == null) {
          return { status: 500, message: 'user doesnot exist' };
        }
    
        const response = await sendVerificationCode(obj.mobile);
        return { ...response };
  }

  async loginDirect(obj: LoginDTO) {
    let user = await User.findOne({ phone: obj.mobile });

    if (user == null) {
      return { status: 500, message: 'user doesnot exist' };
    }

    return { status: 200, message: 'approved' };
  }
}
