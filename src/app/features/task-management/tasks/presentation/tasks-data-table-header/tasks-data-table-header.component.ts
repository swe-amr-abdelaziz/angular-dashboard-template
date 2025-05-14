import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-tasks-data-table-header',
  standalone: false,
  templateUrl: './tasks-data-table-header.component.html',
  styleUrls: ['./tasks-data-table-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksDataTableHeaderComponent {
  @Output() createTaskDialogOpen = new EventEmitter<void>();

  openCreateTaskDialog(): void {
    this.createTaskDialogOpen.emit();
  }
}
