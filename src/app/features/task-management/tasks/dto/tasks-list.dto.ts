import { Task } from '../domain/task';

export type TaskListDto = Pick<
  Task,
  'id' | 'name' | 'startDate' | 'urgency' | 'status' | 'assignedTo' | 'endDate'
>;
