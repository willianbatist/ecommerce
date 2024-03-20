import { Address, AddressCreateDTO } from 'src/address/dto/address.dto';

export abstract class AddressRepository {
  abstract create(data: AddressCreateDTO): Promise<Address>;
}
