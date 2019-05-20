import { Component, OnInit } from '@angular/core';
import {Message} from '../models/message';
import {FormControl, Validators} from '@angular/forms';
import { MessageAdd, MessageChange, MessageRemove } from '../../ngRx/message.action';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'project-chief',
  templateUrl: './chief.component.html',
  styleUrls: ['./chief.component.styl']
})
export class ChiefComponent implements OnInit {
  //
  // chief: Message;
  //
  // textFormControl = new FormControl('', [Validators.required]);
  //
  // constructor() { }
  //
  // ngOnInit() {
  //   this.chief = {id: 'chief', text: 'chief', typing: false};
  //
  //   this.textFormControl.setValue( this.chief.text );
  // }


  count$: Observable<Message>; // todo:4обещание от либы

  constructor(private store: Store<Message>) {
    this.count$ = store.pipe(select('count')); // подпись на событие 'count'
  }

  ngOnInit() {}

  increment(text) {
    this.store.dispatch(new MessageAdd('btn:' + text));
  }

  decrement(text) {
    this.store.dispatch(new MessageRemove('btn:' + text));
  }

  reset(text) {
    this.store.dispatch(new MessageChange('btn:' + text));
  }

}
