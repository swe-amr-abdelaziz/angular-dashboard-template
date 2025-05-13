import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { AsyncDirective } from '@app/shared/directives/async.directive';
import { RouteData } from '@app/shared/interfaces';
import { filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent extends AsyncDirective implements OnInit {
  title = signal('');

  constructor(private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((e): e is RoutesRecognized => e instanceof RoutesRecognized))
      .pipe(takeUntil(this.destroy$))
      .subscribe((event) => {
        this.getLeafRouteLabel(event);
      });
  }

  private getLeafRouteLabel(event: RoutesRecognized): void {
    let route = event.state.root.firstChild;
    while (route?.children?.length) {
      route = route.firstChild;
    }
    const label = (<RouteData>route?.data).label;
    this.title.set(label);
  }
}
