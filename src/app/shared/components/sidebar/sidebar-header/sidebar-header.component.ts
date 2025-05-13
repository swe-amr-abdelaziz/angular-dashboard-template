import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';

@Component({
  standalone: false,
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarHeaderComponent {
  constructor(
    private router: Router,
    public settings: GlobalSettingsService,
  ) {}

  navigateToHome(): void {
    this.router.navigate(['/']);
  }

  toggleExpanded(): void {
    this.settings.toggleSidebar();
  }

  toggleDarkMode(): void {
    this.settings.toggleDarkMode();
  }
}
