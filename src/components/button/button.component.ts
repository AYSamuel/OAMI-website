import { Component, input } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';
import { CommonModule } from '@angular/common';

export enum BUTTON_SIZE {
  SMALL = 'small',
  LARGE = 'large',
}

export enum BUTTON_TYPE {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

export enum BUTTON_VARIANT {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Component({
  selector: 'oami-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class OamiButtonComponent extends BaseComponent {
  // we want label, size, disabled, type, and click event to be emitted
  label = input<string>();
  size = input<BUTTON_SIZE>();
  disabled = input<boolean>(false);
  variant = input<BUTTON_VARIANT>();
  type = input<BUTTON_TYPE>();

  get classes(): string[] {
    return ['oami-button', `oami-button--${this.size()}`, `oami-button--${this.variant()}`];
  }
}
