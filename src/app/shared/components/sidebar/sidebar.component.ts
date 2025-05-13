import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { menuRoutes as routes } from '@app/shared/constants/menu-routes';
import { RoutePosition } from '@app/shared/enums';
import { AppRoute } from '@app/shared/interfaces';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';

@Component({
  standalone: false,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit {
  constructor(public settings: GlobalSettingsService) {}

  @HostListener('window:resize', ['$event'])
  onResize(_: Event): void {
    const screenWidth = window.innerWidth;
    screenWidth <= 768
      ? this.settings.collapseSidebar()
      : this.settings.expandSidebar();
  }

  ngAfterViewInit(): void {}

  get mainRoutes(): AppRoute[] {
    return routes.filter((r) => r.data?.position === RoutePosition.Main);
  }

  get secondaryRoutes(): AppRoute[] {
    return routes.filter((r) => r.data?.position === RoutePosition.Secondary);
  }
}
