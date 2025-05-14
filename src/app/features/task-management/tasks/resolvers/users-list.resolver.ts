import { Injectable } from '@angular/core';
import { MaybeAsync, RedirectCommand, Resolve } from '@angular/router';
import { GetUsersListUseCase } from '@app/shared/features/user/application/get-users-list.use-case';
import { UserListDto } from '@app/shared/features/user/dto/users-list.dto';
import { catchError, EMPTY, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersListResolver implements Resolve<UserListDto[]> {
  constructor(private readonly getUsersList: GetUsersListUseCase) {}

  resolve(): MaybeAsync<UserListDto[] | RedirectCommand> {
    return from(this.getUsersList.execute()).pipe(
      catchError(() => {
        return EMPTY;
      }),
    );
  }
}
