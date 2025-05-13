import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';

export const taskManagementRoutes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    data: { label: 'Tasks' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { label: 'Projects' },
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    data: { label: 'Departments' },
  },
  {
    path: 'support-tickets',
    component: SupportTicketsComponent,
    data: { label: 'Support Tickets' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(taskManagementRoutes)],
  exports: [RouterModule],
})
export class TaskManagementRoutingModule {}
