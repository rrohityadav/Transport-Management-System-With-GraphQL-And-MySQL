import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput, QueryUserArg } from './dto/create-user.input';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UpdatePasswordInput, UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(input: CreateUserInput): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(input.password, saltRounds);
    const newUser = this.usersRepository.create({
      ...input,
      password: hashedPassword,
    });
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(data: QueryUserArg): Promise<User> {
    return this.usersRepository.findOne({ where: { id: data.id } });
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }
  async update(data: UpdateUserInput): Promise<number> {
    const { id, ...updateData } = data;
    const result = await this.usersRepository.update({ id }, updateData);
    if (!result) throw new BadRequestException('user data is not updated');
    return result.affected;
  }

  async updatePassword(
    data: UpdatePasswordInput,
  ): Promise<{ message: string }> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const result = await this.usersRepository.update(
      { id: data.id },
      { password: hashedPassword },
    );
    if (result.affected === 0)
      throw new BadRequestException('user password is not updated');
    return { message: 'success' };
  }

  async removeUser(id: number): Promise<{ message: string }> {
    const result = await this.usersRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: 'User removed successfully' };
  }
}
