import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskDetailDto } from '../dto/task-detail.dto';
import { TaskListDto } from '../dto/tasks-list.dto';

export abstract class TaskRepository {
  abstract getTasksList(): Promise<TaskListDto[]>;
  abstract getTask(id: number): Promise<TaskDetailDto>;
  abstract createTask(taskDto: CreateTaskDto): Promise<number>;
}
