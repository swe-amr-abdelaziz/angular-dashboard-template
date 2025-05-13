import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppRoute } from '@app/shared/interfaces';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';

@Component({
  standalone: false,
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarMenuComponent {
  @Input() routes: AppRoute[] = [];
  @Input() parentPath?: string;

  constructor(public settings: GlobalSettingsService) {}
}
