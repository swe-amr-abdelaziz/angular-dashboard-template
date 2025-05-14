import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AsyncDirective } from '@app/shared/directives/async.directive';
import { AppRoute } from '@app/shared/interfaces';
import { GlobalSettingsService } from '@app/shared/services/global-settings.service';
import { filter, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('submenu', [
      state('hidden', style({ height: '0', overflow: 'hidden', opacity: 0 })),
      state('visible', style({ height: '*', overflow: 'hidden', opacity: 1 })),
      transition(
        'visible <=> hidden',
        [style({ overflow: 'hidden' }), animate('{{ transitionParams }}')],
        { params: { transitionParams: '300ms ease-in-out' } },
      ),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class SidebarItemComponent extends AsyncDirective implements OnInit {
  @Input() route!: AppRoute;
  @Input() endIcon?: string;
  @Input() parentPath?: string;

  expanded = signal(false);

  constructor(
    private router: Router,
    public settings: GlobalSettingsService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.expanded.set(this.childActive);

    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.expanded.set(this.childActive);
      });

    this.settings.sidebarExpanded$
      .pipe(takeUntil(this.destroy$))
      .subscribe((sidebarExpanded) => {
        if (this.childActive) {
          this.expanded.set(sidebarExpanded);
        } else if (this.expanded()) {
          this.expanded.set(false);
        }
      });
  }

  get routerLink(): string[] {
    const result: string[] = [this.route.path || ''];
    if (this.parentPath) {
      result.unshift(this.parentPath);
    }
    return result;
  }

  hasChildren = computed(() => {
    return Boolean(
      (!this.route.data?.leafRoute &&
        this.route.children &&
        this.route.children.length) ||
        this.route.loadChildren,
    );
  });

  get showExpandIcon(): boolean {
    return Boolean(
      this.settings.isSidebarExpanded && (this.hasChildren() || this.endIcon),
    );
  }

  get childActive(): boolean {
    const { path } = this.route;
    return Boolean(path) && this.router.url.startsWith(`/${path}`);
  }

  handleClick(): void {
    if (this.hasChildren()) {
      this.expanded.set(!this.expanded());
      return;
    }
    this.router.navigate([this.route.path]);
  }
}
