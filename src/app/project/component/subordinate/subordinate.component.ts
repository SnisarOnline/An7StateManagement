import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {Observable, Subject} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {InterfaceState} from '../../_store-ngRx/reducers/message.reducers';
import {debounceTime, map, takeLast, tap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SubordinateAdd, TypingStart, TypingStop} from '../../_store-ngRx/actions/message.action';

@Component({
  selector: 'project-subordinate',
  templateUrl: './subordinate.component.html',
  styleUrls: ['./subordinate.component.styl']
})
export class SubordinateComponent implements OnInit {

  @Input('personalNumber') personalNumber: string;

  person: Message;
  chiefMessage$: Observable<Message>;
  TypingInput$ = new Subject<any>();
  chiefTyping$: Observable<{ typing: string }[]>;

  personGroup: FormGroup = new FormGroup({
    id: new FormControl('FormControl id', [Validators.required]),
    text: new FormControl('FormControl text', [Validators.required])
  });


  constructor( private store: Store<InterfaceState> ) {}

  ngOnInit() {

    this.person = { id: 'person_id ' + this.personalNumber, text: 'person_text' };
    this.personGroup.patchValue( this.person );

    // todo: Обьеденить подписки "projectStore"
    this.chiefMessage$ = this.store.pipe(
      select('projectStore'),
      map( ( state: InterfaceState) => state.chiefMessage )
    );

    this.chiefTyping$ = this.store.pipe(
      select('projectStore'),
      map( ( state: InterfaceState) => state.events ),
    );


    this.TypingInput$
      .pipe(debounceTime(1000))
      .subscribe((next) => {
        this.store.dispatch( new TypingStop({typing: this.personGroup.value.id} ) );
      } );
  }


  messageAdd() {
    const newMessageOnStore = new Message(this.personGroup.value.id, this.personGroup.value.text);
    this.store.dispatch(new SubordinateAdd(newMessageOnStore));
  }

  onChange(valueInput: string) {
    this.store.dispatch( new TypingStart({typing: this.personGroup.value.id} ) );
    this.TypingInput$.next();
  }

}
