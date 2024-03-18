import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/user.dto';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: UserCreateDTO, @Res() res: Response) {
    try {
      const user = await this.userService.create(body);
      if ('message' in user) {
        return res.status(HttpStatus.BAD_REQUEST).json(user);
      }
      return res.status(HttpStatus.CREATED).json(user);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }

  @Post('validation')
  async isExistsUser(@Body() body: UserCreateDTO, @Res() res: Response) {
    try {
      const { email, cpf } = body;
      const isUser = await this.userService.isUserExist(email, cpf);
      if (isUser === null) {
        return res.status(HttpStatus.OK).json({ message: 'OK' });
      }
      return res.status(HttpStatus.OK).json(isUser);
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          error,
        },
        HttpStatus.BAD_REQUEST,
        {
          cause: error,
        },
      );
    }
  }
}
