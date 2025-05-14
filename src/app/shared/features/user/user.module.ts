import { NgModule } from '@angular/core';
import { UserProfileComponent } from './presentation/user-profile/user-profile.component';
import { UserApiService } from './infrastructure/user-api.service';
import { UserRepository } from './repositories/user.repository';
import { GetUserProfileUseCase } from './application/get-profile.use-case';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
import { GetUsersListUseCase } from './application/get-users-list.use-case';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, TooltipModule],
  providers: [
    {
      provide: UserRepository,
      useClass: UserApiService,
    },
    GetUserProfileUseCase,
    GetUsersListUseCase,
  ],
  exports: [UserProfileComponent],
})
export class UserModule {}
