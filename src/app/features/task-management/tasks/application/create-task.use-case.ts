import { Injectable } from '@angular/core';

import { TaskRepository } from '../repositories/task.repository';
import { CreateTaskDto } from '../dto/create-task.dto';

@Injectable()
export class CreateTaskUseCase {
  constructor(private readonly taskRepo: TaskRepository) {}

  async execute(taskDto: CreateTaskDto): Promise<number> {
    const taskId = await this.taskRepo.createTask(taskDto);
    return taskId;
  }
}
