import {
  Body,
  Controller,
  Post,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { AddressCreateDTO } from './dto/address.dto';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() body: AddressCreateDTO, @Res() res: Response) {
    try {
      const address = await this.addressService.create(body);
      return res.status(HttpStatus.CREATED).json(address);
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
