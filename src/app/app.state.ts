import { ActionReducerMap } from "@ngrx/store";
// import * as bananaStore from "./banana/state";
import { State, initialState as initialStates } from './banana/state/banana.state';
import { reducer} from './banana/state/banana.reducer';

export interface AppState{
  banana: State
}
export const initialState: AppState = {
  banana: initialStates
}
export const reducers: ActionReducerMap<AppState, any> = {
  banana: reducer
}

export const getMyBanana = (s: AppState) => s.banana;

