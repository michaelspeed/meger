import {Body, Controller, Get, Post} from '@nestjs/common';

import {AppService} from './app.service';
import {RegisterDto} from "./Dto/register.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('login')
  async login(@Body() body) {
    return this.appService.login(body)
  }

  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.appService.register(body)
  }
}
