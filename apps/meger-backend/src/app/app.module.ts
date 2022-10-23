import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {PrismaService} from "./prisma/prisma.service";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '365d'
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {
}
