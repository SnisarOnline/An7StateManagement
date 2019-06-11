import {Action} from '@ngrx/store';

export enum ChiefActionTypes {
  Add = '[Chief Message] Add',
}
export enum SubordinateActionTypes {
  Add = '[Subordinate Message] Add',
}
export enum TypingActionTypes {
  Start = '[TypingAction] Start',
  Stop = '[TypingAction] Stop',
}



export class ChiefAdd implements Action {
  readonly type = ChiefActionTypes.Add;
  constructor(public payload: any) {
    console.log( 'ChiefAdd payload: ', payload );
  }
}



export class SubordinateAdd implements Action {
  readonly type = SubordinateActionTypes.Add;
  constructor(public payload: any) {
    console.log( 'SubordinateAdd payload: ', payload );
  }
}



export class TypingStart implements Action {
  readonly type = TypingActionTypes.Start;
  constructor(public payload: {typing: string}) {
    console.log( 'TypingStart payload: ', payload );
  }
}

export class TypingStop implements Action {
  readonly type = TypingActionTypes.Stop;
  constructor(public payload: {typing: string}) {
    console.log( 'TypingStop payload: ', payload );
  }
}



export type Actions =
  ChiefAdd |
  SubordinateAdd |
  TypingStart | TypingStop;
