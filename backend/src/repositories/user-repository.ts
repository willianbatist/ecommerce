import { User } from 'src/entities/user.entity';
import { UserCreateDTO } from 'src/user/dto/user.dto';

export abstract class UserRepository {
  abstract create(data: UserCreateDTO): Promise<User>;
  abstract findUserEmail(email: string): Promise<User | null>;
  abstract findUserCpf(cpf: string): Promise<User | null>;
}
