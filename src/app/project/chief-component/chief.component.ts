import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'project-chief',
  templateUrl: './chief.component.html',
  styleUrls: ['./chief.component.styl']
})
export class ChiefComponent implements OnInit {

  chief: Message;

  textFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
    this.chief = {id: 'chief', text: 'chief', typing: false};

    this.textFormControl.setValue( this.chief.text );
  }

}
