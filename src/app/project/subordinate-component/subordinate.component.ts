import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../models/message';
import {FormControl, Validators} from '@angular/forms'; // Статические методы для валидации форм

@Component({
  selector: 'project-subordinate',
  templateUrl: './subordinate.component.html',
  styleUrls: ['./subordinate.component.styl']
})
export class SubordinateComponent implements OnInit {

  @Input() person: Message;

  textFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
    this.textFormControl.setValue( this.person.text );
  }

}
