import { User } from '../domain/user';

export type UserListDto = Pick<User, 'id' | 'name' | 'image'>;
