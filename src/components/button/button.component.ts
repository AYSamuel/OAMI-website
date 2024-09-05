import { Component, input } from '@angular/core';
import { BaseComponent } from '../../shared/components/base.component';

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
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends BaseComponent {
  // we want label, size, disabled, type, and click event to be emitted
  label = input.required<string>();
  size = input.required<BUTTON_SIZE>();
  disabled = input<boolean>(false);
  variant = input.required<BUTTON_VARIANT>();
  type = input<BUTTON_TYPE>();
}
