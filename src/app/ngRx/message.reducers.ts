// import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
// import { environment } from '../../environments/environment';
//
// export interface State {}
//
// export const reducers: ActionReducerMap<State> = {};
//
//
// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { Action } from '@ngrx/store';
import { MessageAction } from './message.action';
export const initialState = 0;

/**
 * todo:1Обработка конкретного События
 * @param state
 * @param action
 */
export function counterReducer(state = initialState, action: Action) {
  switch (action.type) {
    case MessageAction.Add:
      return state + 1;

    case MessageAction.Remove:
      return state - 1;

    case MessageAction.Change:
      return 0;

    default:
      return state;
  }
}
