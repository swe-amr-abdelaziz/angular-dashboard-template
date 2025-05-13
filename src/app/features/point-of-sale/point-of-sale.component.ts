import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-point-of-sale',
  standalone: false,
  templateUrl: './point-of-sale.component.html',
  styleUrl: './point-of-sale.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointOfSaleComponent {}
