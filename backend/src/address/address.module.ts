import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AddressRepository } from 'src/repositories/address-repository';
import { PrismaAddressRepository } from 'src/repositories/prisma/prisma-address-repository';

@Module({
  controllers: [AddressController],
  providers: [
    AddressService,
    PrismaService,
    {
      provide: AddressRepository,
      useClass: PrismaAddressRepository,
    },
  ],
})
export class AddressModule {}
