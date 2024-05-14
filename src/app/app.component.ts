import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// test01-05

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'git_test';
}
