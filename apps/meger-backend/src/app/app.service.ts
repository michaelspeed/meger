import {Injectable} from '@nestjs/common';
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

  }
}
