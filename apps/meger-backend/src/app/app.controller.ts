import {Body, Controller, Get, Post} from '@nestjs/common';

import {AppService} from './app.service';

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
  async register(@Body() body) {
    return this.appService.register(body)
  }
}
