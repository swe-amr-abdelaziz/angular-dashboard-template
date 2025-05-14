import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
} from '@angular/core';
import { Variant } from '@app/shared/types';

@Directive({
  standalone: false,
  selector: '[appChip]',
})
export class ChipDirective implements AfterViewInit {
  @Input('appChip') appChip!: Variant | '';
  @Input('isUserChip') isUserChip?: boolean;
  private el = inject(ElementRef);

  constructor() {}
  ngAfterViewInit(): void {
    if (this.appChip) {
      this.setupVariant();
    } else if (this.isUserChip) {
      this.setupUser();
    }
  }

  private setupVariant(): void {
    const el: HTMLElement = this.el.nativeElement;

    el.style.padding = '4px 6px';
    el.style.fontSize = '0.8rem';

    el.style.backgroundColor = `var(--${this.appChip}-lighter)`;
    el.style.border = `1px solid var(--${this.appChip}-light)`;
    el.style.color = `var(--${this.appChip}-dark)`;
  }

  private setupUser(): void {
    const el: HTMLElement = this.el.nativeElement;

    el.style.padding = '3px 6px 3px 13px';
    el.style.borderRadius = '6px';
    el.style.fontSize = '0.8rem';

    el.style.backgroundColor = 'unset';
    el.style.border = `1px solid var(--secondary-light)`;
    el.style.color = `var(--secondary-dark)`;

    const img: HTMLImageElement | null = el.querySelector('img');
    if (img) {
      img.style.width = img.style.height = '1rem';
    }
  }
}
