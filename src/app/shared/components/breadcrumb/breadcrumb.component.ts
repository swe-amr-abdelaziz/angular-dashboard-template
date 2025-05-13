import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { AsyncDirective } from '@app/shared/directives/async.directive';
import { RouteData } from '@app/shared/interfaces';
import { MenuItem } from 'primeng/api';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  standalone: false,
  templateUrl: './breadcrumb.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent extends AsyncDirective implements OnInit {
  items = signal<MenuItem[]>([]);
  home = signal<MenuItem>({ icon: 'pi pi-home', routerLink: '/' });

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.router.events.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event instanceof RoutesRecognized) {
        this.constructItems(event);
      }
    });
  }

  private constructItems(event: RoutesRecognized): void {
    const menuItems: MenuItem[] = [];

    let route = event.state.root.firstChild;
    const routeData = this.getRouteData(route);
    menuItems.push(routeData);

    while (route?.children?.length) {
      route = route.firstChild;
      const routeData = this.getRouteData(route);
      menuItems.push(routeData);
    }

    this.items.set(menuItems);
  }

  private getRouteData(route: ActivatedRouteSnapshot | null): MenuItem {
    if (!route) return {};

    const routeData: MenuItem = {};
    routeData.label = (<RouteData>route?.data).label;
    return routeData;
  }
}
