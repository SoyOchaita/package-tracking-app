import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('package-tracking-app');

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl('/' + route);
  }
}
