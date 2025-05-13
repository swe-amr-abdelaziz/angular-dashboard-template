import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-finance',
  standalone: false,
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinanceComponent {}
