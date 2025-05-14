import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'taskUrgency' })
export class TaskUrgencyPipe implements PipeTransform {
  transform(index: number): string {
    switch (index) {
      case 0:
        return 'Low';
      case 1:
        return 'Medium';
      case 2:
        return 'High';
      default:
        return '';
    }
  }
}
