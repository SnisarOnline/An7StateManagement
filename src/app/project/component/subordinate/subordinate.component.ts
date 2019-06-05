import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {InterfaceState} from '../../_store-ngRx/reducers/message.reducers';
import {map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubordinateAdd} from '../../_store-ngRx/actions/message.action';

@Component({
  selector: 'project-subordinate',
  templateUrl: './subordinate.component.html',
  styleUrls: ['./subordinate.component.styl']
})
export class SubordinateComponent implements OnInit {

  @Input('personalNumber') personalNumber: string;

  person: Message;
  chiefMessage$: Observable<Message>;

  personGroup: FormGroup = new FormGroup({
    id: new FormControl('FormControl id', [Validators.required]),
    text: new FormControl('FormControl text', [Validators.required])
  });


  constructor( private store: Store<InterfaceState> ) {}

  ngOnInit() {

    this.person = { id: 'person_id ' + this.personalNumber, text: 'person_text' };
    this.personGroup.patchValue( this.person );

    this.chiefMessage$ = this.store.pipe(
      select('projectStore'),
      map( ( state: InterfaceState) => state.chiefMessage )
    );

  }


  messageAdd() {
    const newMessageOnStore = new Message(this.personGroup.value.id, this.personGroup.value.text);
    this.store.dispatch(new SubordinateAdd(newMessageOnStore));
  }
}
