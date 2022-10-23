import {ApiProperty} from "@nestjs/swagger";

class RegisterDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

export {RegisterDto};
