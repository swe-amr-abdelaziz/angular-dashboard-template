import { Injectable } from '@angular/core';

import { User } from '../domain/user';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class GetUserProfileUseCase {
  constructor(private readonly userRepo: UserRepository) {}

  async execute(): Promise<User> {
    const profile = await this.userRepo.getProfile();
    return profile;
  }
}
