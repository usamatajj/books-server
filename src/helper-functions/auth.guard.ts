import {
    CanActivate,
    ExecutionContext,
    Injectable,
  } from '@nestjs/common'
  import * as jwt from 'jsonwebtoken'
  
  import { Exceptions } from './exceptions'
  import { UserService } from '../components/user/user.service'
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private readonly userService: UserService) { }
  
    async canActivate(context: ExecutionContext) {
      const req: any = context.switchToHttp().getRequest()
  
      // Checking if token exists
      if (!req.headers.authorization) {
        Exceptions.sendUnauthorizedException('No token was provied')
      }
      try {
        const decodedToken: Object = jwt.verify(
          req.headers.authorization,
          process.env.JWT_SECRET_KEY
        )
  
  
        const user = await this.userService.getUserInfo({ phone: decodedToken['phone'] })
  
        if (!user) {
          Exceptions.sendUnauthorizedException('Invalid token')
        }
  
        if (user.data['status'] == 'blocked') {
          Exceptions.sendUnauthorizedException('User is blocked')
        }
  
        req.user = {...user.data}
        return true
  
      } catch (error) {
        console.log(error)
        Exceptions.sendUnauthorizedException(error.message)
      }
    }
  }
  