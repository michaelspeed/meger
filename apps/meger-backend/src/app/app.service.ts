import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return {message: 'Welcome to meger-backend! do something crazy'};
  }

  async login({}) {
  }
}
