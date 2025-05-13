import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentsComponent {}
