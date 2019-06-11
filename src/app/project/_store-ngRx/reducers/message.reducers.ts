import {Actions, ChiefActionTypes, SubordinateActionTypes, TypingActionTypes} from '../actions/message.action';
import {Message} from '../../models/message';

export interface InterfaceState {
  subordinateMessage: Message[];
  chiefMessage: Message;
  events: { typing: string }[];
}

export const initialState: InterfaceState = {
  subordinateMessage: [],
  chiefMessage: {id: '', text: ''},
  events: [],
};

export function messageReducer(state = initialState, action: Actions) {

  switch (action.type) {
    case ChiefActionTypes.Add:
      return {...state, chiefMessage: action.payload};
    case SubordinateActionTypes.Add:

      const indexSubordinate = state.subordinateMessage.findIndex((value: Message) => value.id === action.payload.id);

      if (indexSubordinate >= 0) {
        state.subordinateMessage.splice(indexSubordinate, 1, action.payload);
      } else {
        state.subordinateMessage.push(action.payload);
      }

      return {...state, subordinateMessage: state.subordinateMessage};
    case TypingActionTypes.Start:

      const indexStartTyping = state.events.findIndex((value: { typing: string }) => value.typing === action.payload.typing);

      if (indexStartTyping >= 0) {
        state.events.splice(indexStartTyping, 1, action.payload);
      } else {
        state.events.push(action.payload);
      }

      // console.log('newStartEvents:', state.events);

      return {...state, events: state.events};
    case TypingActionTypes.Stop:

      const indexStopTyping = state.events.findIndex((value: { typing: string }) => value.typing === action.payload.typing);

      if (indexStopTyping >= 0) {
        state.events.splice(indexStopTyping, 1);
      }

      // console.log('newStopEvents:', state.events);

      return {...state, events: state.events};
    default:
      return state;
  }

}
