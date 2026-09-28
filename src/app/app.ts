import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('shubham-portfolio');
  language: 'en' | 'de' = 'en';

  setLanguage(language: 'en' | 'de') {
    this.language = language;
  }
}
