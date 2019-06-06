import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ChiefAdd } from '../../_store-ngRx/actions/message.action';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {InterfaceState} from '../../_store-ngRx/reducers/message.reducers';

@Component({
  selector: 'project-chief',
  templateUrl: './chief.component.html',
  styleUrls: ['./chief.component.styl']
})
export class ChiefComponent implements OnInit {

  chief: Message;
  subordinateMessage$: Observable<Message[]>;

  chiefGroup: FormGroup = new FormGroup({
    id: new FormControl('FormControl id', [Validators.required]),
    text: new FormControl('FormControl text', [Validators.required])
  });

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.chief = {id: 'chief_id', text: 'chief_text'};
    this.chiefGroup.patchValue( this.chief );

    this.subordinateMessage$ = this.store.pipe(
      select('projectStore'),
      map(( state: InterfaceState) => {
        return  state.subordinateMessage;
        // return state.subordinateMessage.filter((allMessage: Message) => allMessage.id !== this.chief.id);
      } ),
    );
  }



  messageAdd() {
    const newMessageOnStore = new Message(this.chiefGroup.value.id, this.chiefGroup.value.text);
    this.store.dispatch(new ChiefAdd(newMessageOnStore));
  }

}
