import { Injectable } from '@angular/core';

import { TaskRepository } from '../repositories/task.repository';
import { TaskDetailDto } from '../dto/task-detail.dto';

@Injectable()
export class GetTaskDetailUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(id: number): Promise<TaskDetailDto> {
    const task = await this.taskRepo.getTask(id);
    return task;
  }
}
