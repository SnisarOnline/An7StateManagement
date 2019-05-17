import { Component, OnInit } from '@angular/core';
import {Message} from './models/message';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.styl']
})
export class ProjectComponent implements OnInit {

  humanity: Message[];

  constructor() {
    console.log( 'start ProjectComponent' );
  }

  ngOnInit() {
    this.humanity = [
      {text: '1111', id: '1111'},
      {text: '2222', id: '2222'},
      {text: '3333', id: '3333'},
      {text: '4444', id: '4444'}
    ];

  }
}
