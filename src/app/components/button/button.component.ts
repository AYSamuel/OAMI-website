import { Component, input, output } from '@angular/core';

enum BUTTON_SIZE {
  SMALL = 'small',
  LARGE = 'large',
}

enum BUTTON_TYPE {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

@Component({
  selector: 'oami-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // we want label, size, disabled type, and click event
  label = input.required<string>();
  size = input.required<BUTTON_SIZE>();
  disabled = input<boolean>(false);
  type = input<BUTTON_TYPE>();

  buttonClick = output<void>();

  onClick(): void {
    if (!this.disabled()) {
      this.buttonClick.emit();
    }
  }
}
