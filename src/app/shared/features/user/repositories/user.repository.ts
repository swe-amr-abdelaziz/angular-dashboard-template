import { User } from '../domain/user';
import { UserListDto } from '../dto/users-list.dto';

export abstract class UserRepository {
  abstract getProfile(): Promise<User>;
  abstract getUsers(): Promise<UserListDto[]>;
}
