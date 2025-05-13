import { User } from '../domain/user';

export abstract class UserRepository {
  abstract getProfile(): Promise<User>;
}
