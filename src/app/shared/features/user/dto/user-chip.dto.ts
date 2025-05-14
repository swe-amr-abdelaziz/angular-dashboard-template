import { User } from '../domain/user';

export type UserChipDto = Pick<User, 'name' | 'image'>;
