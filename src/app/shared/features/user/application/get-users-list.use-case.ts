import { Injectable } from '@angular/core';

import { UserRepository } from '../repositories/user.repository';
import { UserListDto } from '../dto/users-list.dto';

@Injectable()
export class GetUsersListUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(): Promise<UserListDto[]> {
    const users = await this.userRepo.getUsers();
    return users;
  }
}
