import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'taskStatus' })
export class TaskStatusPipe implements PipeTransform {
  transform(index: number): string {
    switch (index) {
      case 0:
        return 'Draft';
      case 1:
        return 'In progress';
      case 2:
        return 'Completed';
      default:
        return '';
    }
  }
}
