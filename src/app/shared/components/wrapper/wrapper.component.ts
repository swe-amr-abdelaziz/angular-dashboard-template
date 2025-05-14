import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, merge, Observable } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperComponent implements OnInit {
  loading$!: Observable<boolean>;
  private startLoading$!: Observable<boolean>;
  private endLoading$!: Observable<boolean>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startLoading$ = this.router.events.pipe(
      filter((e): e is NavigationStart => e instanceof NavigationStart),
      map(() => true),
    );
    this.endLoading$ = this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(() => false),
    );
    this.loading$ = merge(this.startLoading$, this.endLoading$);
  }
}
