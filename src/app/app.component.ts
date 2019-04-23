import { Component } from '@angular/core';

import { homeAnimation } from './shared/animations/home.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    homeAnimation
  ]
})
export class AppComponent {
  title = 'ng-marvel-comics-site';
}
