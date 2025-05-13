import { Injectable } from '@angular/core';
import { UserRepository } from '../repositories/user.repository';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { User } from '../domain/user';

@Injectable()
export class UserApiService implements UserRepository {
  constructor(private readonly http: HttpClient) {}

  getProfile(): Promise<User> {
    return lastValueFrom(this.http.get<User>('profile'));
  }
}
