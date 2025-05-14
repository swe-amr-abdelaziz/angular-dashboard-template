import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { User } from '../domain/user';
import { UserListDto } from '../dto/users-list.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserApiService extends UserRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  override getProfile(): Promise<User> {
    return lastValueFrom(this.http.get<User>('profile'));
  }

  override getUsers(): Promise<UserListDto[]> {
    return lastValueFrom(this.http.get<UserListDto[]>('users'));
  }
}
