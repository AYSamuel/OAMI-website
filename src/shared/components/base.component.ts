import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  template: '',
})
export class BaseComponent {
  id = input.required<string>();
}
