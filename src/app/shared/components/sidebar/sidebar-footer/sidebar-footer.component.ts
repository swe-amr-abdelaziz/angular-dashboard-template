import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppRoute } from '@app/shared/interfaces';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';

@Component({
  standalone: false,
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooterComponent {
  @Input() routes: AppRoute[] = [];

  constructor(public settings: GlobalSettingsService) {}
}
