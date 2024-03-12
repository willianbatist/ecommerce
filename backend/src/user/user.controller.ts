import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/user')
  async create(@Body() body: UserCreateDTO) {
    const user = await this.userService.create(body);
    return user;
  }
}
