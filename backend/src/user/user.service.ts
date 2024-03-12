import { Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dto/user.dto';
import { UserRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: UserCreateDTO) {
    await this.userRepository.create(data);
  }
}
