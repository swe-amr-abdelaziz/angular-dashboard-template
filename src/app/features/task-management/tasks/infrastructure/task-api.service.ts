import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskRepository } from '../repositories/task.repository';
import { TaskListDto } from '../dto/tasks-list.dto';
import { TaskDetailDto } from '../dto/task-detail.dto';

@Injectable()
export class TaskApiService extends TaskRepository {
  constructor(private readonly http: HttpClient) {
    super();
  }

  override getTasksList(): Promise<TaskListDto[]> {
    return lastValueFrom(this.http.get<TaskListDto[]>('tasks'));
  }

  override getTask(id: number): Promise<TaskDetailDto> {
    return lastValueFrom(this.http.get<TaskDetailDto>(`tasks/${id}`));
  }

  override createTask(taskDto: CreateTaskDto): Promise<number> {
    return lastValueFrom(this.http.post<number>('tasks', taskDto));
  }
}
