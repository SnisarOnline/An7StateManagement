import {Actions, ChiefActionTypes, SubordinateActionTypes, TypingActionTypes} from '../actions/message.action';
import {Message} from '../../models/message';

export interface InterfaceState {
  subordinateMessage: Message[];
  chiefMessage: Message;
  events: any[];
}

export const initialState: InterfaceState = {
  subordinateMessage: [],
  chiefMessage: {id: '', text: ''},
  events:   [],
};

export function messageReducer(state = initialState, action: Actions) {

  switch (action.type) {
    case ChiefActionTypes.Add:
      return { ...state, chiefMessage: action.payload };
    case SubordinateActionTypes.Add:

      const index = state.subordinateMessage.findIndex( (value: Message) => value.id === action.payload.id);

      if (index >= 0 ) {
        state.subordinateMessage.splice(index, 1, action.payload);
      } else {
        state.subordinateMessage.push(action.payload);
      }

      return { ...state, subordinateMessage: state.subordinateMessage };
    case TypingActionTypes.Start:
    case TypingActionTypes.Stop:
      return { ...state, allMessage: action.payload };
    default:
      return state;
  }

}
