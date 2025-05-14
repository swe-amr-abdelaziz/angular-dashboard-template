import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { UserModule } from '@app/shared/features/user/user.module';
import { ProjectsComponent } from './projects/projects.component';
import { DepartmentsComponent } from './departments/departments.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { TasksListComponent } from './tasks/presentation/tasks-list/tasks-list.component';
import { TaskRepository } from './tasks/repositories/task.repository';
import { TaskApiService } from './tasks/infrastructure/task-api.service';
import { CreateTaskUseCase } from './tasks/application/create-task.use-case';
import { GetTaskDetailUseCase } from './tasks/application/get-task-detail.use-case';
import { GetTasksListUseCase } from './tasks/application/get-tasks-list.use-case';
import { TasksListResolver } from './tasks/resolvers/tasks-list.resolver';
import { TasksDataTableComponent } from './tasks/presentation/tasks-data-table/tasks-data-table.component';
import { TaskStatusPipe } from './tasks/pipes/task-status.pipe';
import { TaskUrgencyPipe } from './tasks/pipes/task-urgency.pipe';
import { ChipDirective } from './tasks/directives/chip.directive';
import { TasksDataTableHeaderComponent } from './tasks/presentation/tasks-data-table-header/tasks-data-table-header.component';
import { TasksDataTableFooterComponent } from './tasks/presentation/tasks-data-table-footer/tasks-data-table-footer.component';
import { CreateTaskDialogComponent } from './tasks/presentation/create-task-dialog/create-task-dialog.component';
import { GetUsersListUseCase } from '@app/shared/features/user/application/get-users-list.use-case';

@NgModule({
  declarations: [
    TasksListComponent,
    TasksDataTableComponent,
    TasksDataTableHeaderComponent,
    TasksDataTableFooterComponent,
    CreateTaskDialogComponent,

    ProjectsComponent,
    DepartmentsComponent,
    SupportTicketsComponent,
    ChipDirective,
  ],
  imports: [
    // Core
    CommonModule,
    ReactiveFormsModule,
    TaskManagementRoutingModule,
    UserModule,

    // Primeng
    ButtonModule,
    ChipModule,
    ConfirmDialogModule,
    DatePickerModule,
    DialogModule,
    DividerModule,
    IconField,
    InputIcon,
    InputTextModule,
    MultiSelectModule,
    SelectModule,
    TableModule,
    TextareaModule,
    ToastModule,

    // Pipes
    TaskStatusPipe,
    TaskUrgencyPipe,
  ],
  providers: [
    {
      provide: TaskRepository,
      useClass: TaskApiService,
    },

    // Use cases
    CreateTaskUseCase,
    GetTaskDetailUseCase,
    GetTasksListUseCase,

    // Resolvers
    TasksListResolver,
    GetUsersListUseCase,

    // Primeng
    ConfirmationService,
    MessageService,
  ],
})
export class TaskManagementModule {}
