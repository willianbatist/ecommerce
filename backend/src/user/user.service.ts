import { Injectable } from '@nestjs/common';
import { UserCreateDTO } from './dto/user.dto';
import { UserRepository } from 'src/repositories/user-repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async isUserExist(email: string, cpf: string) {
    const iSemail = await this.userRepository.findUserEmail(email);
    const iScpf = await this.userRepository.findUserCpf(cpf);
    if (iSemail) {
      return {
        message: 'email',
      };
    } else if (iScpf) {
      return {
        message: 'cpf',
      };
    } else {
      return null;
    }
  }

  async create(data: UserCreateDTO) {
    const isValid = await this.isUserExist(data.email, data.cpf);
    if (isValid === null) {
      await this.userRepository.create({
        name: data.name,
        email: data.email,
        password: await bcrypt.hash(data.password, 10),
        role: data.role,
        cpf: data.cpf,
        google_status: data?.google_status,
        google_id: data?.google_id,
      });
      return { OK: 'OK' };
    } else {
      return this.isUserExist(data.email, data.cpf);
    }
  }
}
