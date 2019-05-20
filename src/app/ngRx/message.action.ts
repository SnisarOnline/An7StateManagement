import {Action} from '@ngrx/store';
import {Message} from '../project/models/message';

/**
 * todo:3Действия доступные с етим обьектом
 */
export enum MessageAction {
  Add = '[Message Component] Add',
  Remove = '[Message Component] Remove',
  Change = '[Message Component] Change',
}

export class ActionEx implements Action {
  readonly type;
  payload: string;
}

export class MessageAdd implements ActionEx {
  readonly type = MessageAction.Add;
  constructor(public payload: string) {
    console.log( 'MessageAdd payload', payload );
  }
}

export class MessageRemove implements ActionEx {
  readonly type = MessageAction.Remove;
  constructor(public payload: string) {
    console.log( 'MessageRemove payload', payload );
  }
}

export class MessageChange implements ActionEx {
  readonly type = MessageAction.Change;
  constructor(public payload: string) {
    console.log( 'MessageChange payload', payload );
  }
}
