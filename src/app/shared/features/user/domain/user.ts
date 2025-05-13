import { UserStatus } from './user-status';

export class User {
  constructor(
    public id: number,
    public name?: string,
    public email?: string,
    public image?: string,
    public status: UserStatus = UserStatus.InActive,
  ) {}
}
