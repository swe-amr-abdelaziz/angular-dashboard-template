import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-support-tickets',
  standalone: false,
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportTicketsComponent {}
