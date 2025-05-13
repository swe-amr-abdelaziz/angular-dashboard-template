import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

@NgModule({
  declarations: [
    TasksComponent,
    ProjectsComponent,
    DepartmentsComponent,
    SupportTicketsComponent,
  ],
  imports: [CommonModule, TaskManagementRoutingModule],
})
export class TaskManagementModule {}
