import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskListDto } from '../../dto/tasks-list.dto';
import { map, takeUntil } from 'rxjs';
import { AsyncDirective } from '@app/shared/directives/async.directive';

@Component({
  selector: 'app-tasks-list',
  standalone: false,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListComponent extends AsyncDirective implements OnInit {
  tasks = signal<TaskListDto[]>([]);
  createTaskDialogVisible = signal(false);

  constructor(private readonly activatedRoute: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .pipe(
        map((data) => data['tasks']),
        takeUntil(this.destroy$),
      )
      .subscribe((data) => {
        this.tasks.set(data);
      });
  }

  toggleCreateTaskDialog(visible: boolean): void {
    this.createTaskDialogVisible.set(visible);
  }
}
