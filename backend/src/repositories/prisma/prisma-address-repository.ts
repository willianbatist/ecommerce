import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AddressRepository } from '../address-repository';
import { Address, AddressCreateDTO } from 'src/address/dto/address.dto';

@Injectable()
export class PrismaAddressRepository implements AddressRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: AddressCreateDTO): Promise<Address> {
    const address = await this.prisma.address.create({ data });
    return address;
  }
}
