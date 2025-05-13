import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-purchases',
  standalone: false,
  templateUrl: './purchases.component.html',
  styleUrl: './purchases.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchasesComponent {}
