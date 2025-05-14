import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { TasksListComponent } from './tasks/presentation/tasks-list/tasks-list.component';
import { AppRoute } from '@app/shared/interfaces';
import { TasksListResolver } from './tasks/resolvers/tasks-list.resolver';
import { UsersListResolver } from './tasks/resolvers/users-list.resolver';

export const taskManagementRoutes: AppRoute[] = [
  {
    path: 'tasks',
    data: { label: 'Tasks', leafRoute: true },
    children: [
      {
        path: '',
        component: TasksListComponent,
        resolve: { tasks: TasksListResolver, users: UsersListResolver },
      },
    ],
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
