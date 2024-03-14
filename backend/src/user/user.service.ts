import { Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dto/user.dto';
import { UserRepository } from 'src/repositories/user-repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(data: UserCreateDTO) {
    const user = await this.userRepository.create({
      name: data.name,
      email: data.email,
      password: await bcrypt.hash(data.password, 10),
      role: data.role,
      google_status: data?.google_status,
      google_id: data?.google_id,
    });
    return user;
  }
}
