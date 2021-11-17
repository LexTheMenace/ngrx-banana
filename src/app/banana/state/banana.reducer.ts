import { GET_NEW_BANANA } from './banana.actions';
import * as bananaActions from './banana.actions';
import { initialState } from '.';
import { Action } from '@ngrx/store';

export function reducer(state: any = initialState, action: Action): any {
  switch (action.type) {
    case GET_NEW_BANANA: {
      console.log('REDUCER ' + GET_NEW_BANANA);
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow',
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
