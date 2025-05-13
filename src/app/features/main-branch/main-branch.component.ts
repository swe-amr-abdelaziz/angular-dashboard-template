import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-branch',
  standalone: false,
  templateUrl: './main-branch.component.html',
  styleUrl: './main-branch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainBranchComponent {}
