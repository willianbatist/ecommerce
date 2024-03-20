import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
}
