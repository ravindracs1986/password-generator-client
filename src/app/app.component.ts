import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
            
import { PasswordLengthComponent } from './components/password-length/password-length.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PasswordLengthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'generate-password';
}
