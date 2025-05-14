import { Injectable } from '@angular/core';

import { TaskRepository } from '../repositories/task.repository';
import { TaskListDto } from '../dto/tasks-list.dto';

@Injectable()
export class GetTasksListUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(): Promise<TaskListDto[]> {
    const tasks = await this.taskRepo.getTasksList();
    return tasks;
  }
}
