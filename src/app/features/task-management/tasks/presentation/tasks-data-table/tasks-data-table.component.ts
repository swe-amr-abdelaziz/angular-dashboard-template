import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskListDto } from '../../dto/tasks-list.dto';
import { Variant } from '@app/shared/types';
import { TaskUrgency } from '../../domain/task-urgency';
import { TaskStatus } from '../../domain/task-status';
import { UserChipDto } from '@app/shared/features/user/dto/user-chip.dto';

@Component({
  selector: 'app-tasks-data-table',
  standalone: false,
  templateUrl: './tasks-data-table.component.html',
  styleUrls: ['./tasks-data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksDataTableComponent {
  @Input() tasks!: TaskListDto[];
  selectedTasks: TaskListDto[] = [];

  constructor() {}

  getUrgencyVariant({ urgency }: TaskListDto): Variant {
    switch (urgency) {
      case TaskUrgency.Low:
        return 'secondary';
      case TaskUrgency.Medium:
        return 'warn';
      case TaskUrgency.High:
        return 'danger';
      default:
        return 'secondary';
    }
  }

  getStatusVariant({ status }: TaskListDto): Variant {
    switch (status) {
      case TaskStatus.Draft:
        return 'secondary';
      case TaskStatus.InProgress:
        return 'info';
      case TaskStatus.Completed:
        return 'success';
      default:
        return 'secondary';
    }
  }

  trackByName(id: number, { name }: UserChipDto): string {
    return `${id}-${name}`;
  }
}
