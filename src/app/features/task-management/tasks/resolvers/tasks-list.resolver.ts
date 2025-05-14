import { Injectable } from '@angular/core';
import { MaybeAsync, RedirectCommand, Resolve } from '@angular/router';
import { TaskListDto } from '../dto/tasks-list.dto';
import { GetTasksListUseCase } from '../application/get-tasks-list.use-case';
import { catchError, EMPTY, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksListResolver implements Resolve<TaskListDto[]> {
  constructor(private readonly getTasksList: GetTasksListUseCase) {}

  resolve(): MaybeAsync<TaskListDto[] | RedirectCommand> {
    return from(this.getTasksList.execute()).pipe(
      catchError(() => {
        return EMPTY;
      }),
    );
  }
}
