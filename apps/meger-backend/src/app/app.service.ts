import {Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {PrismaService} from "./prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AppService {

  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ) {
  }

  getData(): { message: string } {
    return {message: 'Welcome to meger-backend! do something crazy'};
  }

  async register({email, password}) {
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await this.prismaService.user.create({
      data: {
        email,
        password: hashedPassword
      }
    })
    return user;
  }

  async login({email, password}) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email
      }
    })
    if (!user) {
      throw new NotFoundException('User not found')
    }

    // base64 -> <-
    const validatePassword = bcrypt.compareSync(password, user.password)

    if (!validatePassword) {
      throw new UnauthorizedException('Password is incorrect')
    }

    const {id, email: userEmail} = user;
    const token = await this.jwtService.signAsync({...user})
    return {
      email: userEmail,
      id,
      token: token
    }
  }
}
