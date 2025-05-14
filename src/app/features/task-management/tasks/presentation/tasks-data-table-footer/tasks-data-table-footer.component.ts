import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tasks-data-table-footer',
  standalone: false,
  templateUrl: './tasks-data-table-footer.component.html',
  styleUrls: ['./tasks-data-table-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksDataTableFooterComponent {}
