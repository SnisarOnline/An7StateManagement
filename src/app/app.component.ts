import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Beginning Study An7 StateManagement';
  constructor() {
    console.log( 'start AppComponent' );
  }
}
