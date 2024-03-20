import { Injectable } from '@nestjs/common';
import { AddressRepository } from 'src/repositories/address-repository';
import { AddressCreateDTO } from './dto/address.dto';

@Injectable()
export class AddressService {
  constructor(private addressRepository: AddressRepository) {}

  async create(data: AddressCreateDTO) {
    const address = await this.addressRepository.create(data);
    return address;
  }
}
