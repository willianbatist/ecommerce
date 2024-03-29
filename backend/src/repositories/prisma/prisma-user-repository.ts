import { User } from 'src/entities/user.entity';
import { UserCreateDTO } from 'src/user/dto/user.dto';
import { UserRepository } from '../user-repository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async findUserEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { email } });
    return user;
  }

  async findUserCpf(cpf: string): Promise<User> {
    const user = await this.prisma.user.findFirst({ where: { cpf } });
    return user;
  }

  async create(data: UserCreateDTO): Promise<User> {
    const user = await this.prisma.user.create({ data });
    return user;
  }
}
