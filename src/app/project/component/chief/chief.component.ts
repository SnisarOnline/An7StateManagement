import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ChiefAdd, TypingStart, TypingStop} from '../../_store-ngRx/actions/message.action';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {debounceTime, map, tap} from 'rxjs/operators';
import {InterfaceState} from '../../_store-ngRx/reducers/message.reducers';

@Component({
  selector: 'project-chief',
  templateUrl: './chief.component.html',
  styleUrls: ['./chief.component.styl']
})
export class ChiefComponent implements OnInit {

  chief: Message;
  subordinateMessage$: Observable<Message[]>;
  TypingInput$ = new Subject<any>();

  chiefGroup: FormGroup = new FormGroup({
    id: new FormControl('FormControl id', [Validators.required]),
    text: new FormControl('FormControl text', [Validators.required])
  });

  constructor(private store: Store<any>) {
    this.chief = {id: 'chief_id', text: 'chief_text'};
    this.chiefGroup.patchValue( this.chief );
  }

  ngOnInit() {

    this.subordinateMessage$ = this.store.pipe(
      select('projectStore'),
      map(( state: InterfaceState) => {
        return  state.subordinateMessage;
        // return state.subordinateMessage.filter((allMessage: Message) => allMessage.id !== this.chief.id);
      } )
    );


    /**
     * How to use debounceTime
     * https://stackoverflow.com/questions/50739211/how-to-use-debouncetime-in-an-angular-component
     * https://stackblitz.com/edit/debounce-validator?file=src%2Fapp%2Fform.component.ts
     */
    this.TypingInput$
      .pipe(debounceTime(1000)) // через секунду после конца изменений
      .subscribe((next) => {
        this.store.dispatch( new TypingStop({typing: this.chiefGroup.value.id} ) );
      } );
  }



  messageAdd() {
    const newMessageOnStore = new Message(this.chiefGroup.value.id, this.chiefGroup.value.text);
    this.store.dispatch(new ChiefAdd(newMessageOnStore));
  }

  onChange(valueInput: string) {
    this.store.dispatch( new TypingStart({typing: this.chiefGroup.value.id} ) );
    this.TypingInput$.next(); // поток изменений
  }

}
