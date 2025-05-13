import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { AsyncDirective } from '@app/shared/directives/async.directive';
import { GetUserProfileUseCase } from '../../application/get-profile.use-case';
import { from, takeUntil } from 'rxjs';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';
import { User } from '../../domain/user';
import { UserStatus } from '../../domain/user-status';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileComponent extends AsyncDirective implements OnInit {
  profile = signal<User>({} as User);
  statusColor = signal<string>('');

  constructor(
    public settings: GlobalSettingsService,
    private readonly getProfile: GetUserProfileUseCase,
  ) {
    super();
  }

  ngOnInit(): void {
    from(this.getProfile.execute())
      .pipe(takeUntil(this.destroy$))
      .subscribe((profile) => {
        this.profile.set(profile);
        this.setStatusColor();
      });
  }

  setStatusColor(): void {
    switch (this.profile().status) {
      case UserStatus.Active:
        this.statusColor.set('var(--p-green-500)');
        return;
      case UserStatus.InActive:
        this.statusColor.set('var(--p-red-500)');
        return;
      case UserStatus.Busy:
        this.statusColor.set('var(--p-yellow-500)');
        return;
      default:
        this.statusColor.set('white');
    }
  }
}
