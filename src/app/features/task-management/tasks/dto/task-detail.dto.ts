import { Task } from '../domain/task';

export type TaskDetailDto = Omit<Task, 'id'>;
