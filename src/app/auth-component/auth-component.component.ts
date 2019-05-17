import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.styl']
})
export class AuthComponentComponent implements OnInit {

  constructor() {
    console.log( 'start AuthComponentComponent' );
  }

  ngOnInit() {}

}
