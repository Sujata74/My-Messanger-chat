import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MainPageComponent } from './main-page/main-page.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule,MainPageComponent],
  template: `
  <app-main-page></app-main-page>
  `,
})
export class App {
  name = 'Hello Shah';
}

bootstrapApplication(App);
