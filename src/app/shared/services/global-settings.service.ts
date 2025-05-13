import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class GlobalSettingsService {
  private sidebarExpanded = signal(true);
  private darkMode = signal(false);
  public sidebarExpanded$ = toObservable(this.sidebarExpanded);
  public darkMode$ = toObservable(this.darkMode);

  get isSidebarExpanded(): boolean {
    return this.sidebarExpanded();
  }

  get isDarkMode(): boolean {
    return this.darkMode();
  }

  toggleSidebar(): void {
    this.sidebarExpanded.set(!this.sidebarExpanded());
  }

  collapseSidebar(): void {
    this.sidebarExpanded.set(false);
  }

  expandSidebar(): void {
    this.sidebarExpanded.set(true);
  }

  toggleDarkMode(): void {
    const el = document.querySelector('html');
    if (!el) return;

    this.darkMode()
      ? el.classList.remove('dark-mode')
      : el.classList.add('dark-mode');
    this.darkMode.set(!this.darkMode());
  }
}
