import { UserChipDto } from '@app/shared/features/user/dto/user-chip.dto';
import { TaskStatus } from './task-status';
import { TaskUrgency } from './task-urgency';

export class Task {
  constructor(
    public id: number,
    public name: string,
    public urgency: TaskUrgency,
    public status: TaskStatus,
    public assignedTo: UserChipDto[],
    public assignedBy: UserChipDto,
    public dateCreated: Date,
    public description?: string,
    public department?: string,
    public startDate?: Date,
    public endDate?: Date,
    public project?: string,
    public tags: string[] = [],
  ) {}
}
