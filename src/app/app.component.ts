import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BUTTON_VARIANT, OamiButtonComponent } from '../components/button/button.component';
import { BUTTON_SIZE } from '../components/button/button.component';

@Component({
  selector: 'oami-root',
  standalone: true,
  imports: [RouterOutlet, OamiButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OAMI-website';

  protected readonly BUTTON_SIZE = BUTTON_SIZE;
  protected readonly BUTTON_VARIANT = BUTTON_VARIANT;

  logToConsole(): void {
    console.log('Button clicked!');
  }
}
