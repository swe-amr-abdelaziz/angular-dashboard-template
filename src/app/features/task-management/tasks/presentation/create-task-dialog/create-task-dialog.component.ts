import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Variant } from '@app/shared/types';
import { CustomValidators } from '@app/shared/utils/validators';
import { TaskUrgency } from '../../domain/task-urgency';
import { AsyncDirective } from '@app/shared/directives/async.directive';
import { ActivatedRoute, Router } from '@angular/router';
import { from, map, takeUntil } from 'rxjs';
import { UserListDto } from '@app/shared/features/user/dto/users-list.dto';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CreateTaskUseCase } from '../../application/create-task.use-case';
import { CreateTaskDto } from '../../dto/create-task.dto';

@Component({
  selector: 'app-create-task-dialog',
  standalone: false,
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTaskDialogComponent
  extends AsyncDirective
  implements OnInit
{
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  form!: FormGroup;
  users!: UserListDto[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private createTask: CreateTaskUseCase,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
    this.buildForm();
    this.activatedRoute.data
      .pipe(
        map((data) => data['users']),
        takeUntil(this.destroy$),
      )
      .subscribe((data) => {
        this.users = data;
      });
  }

  confirmSave(event: Event): void {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure that you want to submit this task?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Save',
      },
      accept: () => {
        this.save();
      },
      reject: () => {},
    });
  }

  private save(): void {
    this.loading = true;
    const { value } = this.form;
    const task: CreateTaskDto = {
      name: value.name?.trim(),
      urgency: value.urgency - 1,
      description: value.description?.trim(),
      startDate: value.startDate,
      endDate: value.endDate,
      assignedTo: value.assignedTo,
    };
    from(this.createTask.execute(task))
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.loading = false;
        this.closeDialog();
        this.messageService.add({
          severity: 'success',
          summary: 'Created new task',
          detail: 'Task has been created successfully',
        });
        this.router.navigate(['task-management/tasks']);
      });
  }

  closeDialog(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  getUrgencyVariant(urgency: number): Variant {
    switch (urgency) {
      case TaskUrgency.Low:
        return 'secondary';
      case TaskUrgency.Medium:
        return 'warn';
      case TaskUrgency.High:
        return 'danger';
      default:
        return 'secondary';
    }
  }

  invalidRequired(field: string): boolean {
    const formControl = this.form.get(field);
    const errors = formControl?.errors;
    if (!errors) return false;
    return formControl?.dirty && errors['required'];
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: ['', CustomValidators.required],
      urgency: [null, CustomValidators.required],
      description: [''],
      startDate: [null],
      endDate: [null],
      assignedTo: [[], CustomValidators.required],
    });
  }
}
