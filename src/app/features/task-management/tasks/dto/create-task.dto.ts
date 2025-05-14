import { Task } from '../domain/task';

export type CreateTaskDto = Pick<
  Task,
  'name' | 'urgency' | 'description' | 'startDate' | 'endDate' | 'assignedTo'
>;
