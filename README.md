# NgrxBanana

Original: https://www.youtube.com/watch?v=272KDxSIQBw

## Step 1

Create banana.state.ts, create and export a state interface, and initialState.

```ts
export interface State {
  isPeeled: boolean;
  bitesRemaining: number;
  color: string;
}

export const initialState: State = {} as State;
```

## Step 2

Create banana.actions.ts, create and export an Action and type to get a new banana.

```ts
import { Action } from "@ngrx/store";

export const GET_NEW_BANANA = "Get New Banana";

export class GetNewBanana implements Action {
  readonly type: string = GET_NEW_BANANA;
  constructor(public payload: any) {
    console.log("ACTION: " + GET_NEW_BANANA);
  }
}

export type BananaAction = GetNewBanana;
```

## Step 3

Create banana.reducer.ts, create and export a reducer.

```ts
import { BananaAction, GET_NEW_BANANA } from "finished-src/app/banana/state";

export function reducer(state: any, action: BananaAction) {
  switch (action.type) {
    case GET_NEW_BANANA:
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: "yellow",
      };
    default:
      return {
        ...state,
      };
  }
}
```

## Step 4

Create and index for banana/state and export the reducer, actions, and state.

```ts
export { reducer } from "./banana.reducer";
export * from "./banana.actions";
export { State, initialState } from "./banana.state";
```

## Step 5

Create app.state.ts. Create and export an interface for AppState with a banana property

```ts
import { ActionReducerMap } from "@ngrx/store";
import * as bananaStore from "./banana/state";

export interface AppState {
  banana: bananaStore.State;
}

export const initialState: AppState = {
  banana: bananaStore.initialState,
};

export const reducers: ActionReducerMap<AppState, any> = {
  banana: bananaStore.reducer,
};

export const getMyBanana = (s: AppState) => s.banana;
```

## Step 6 - Update App Module

Add StoreModule to
app.module's imports array, and pass the reducer map from app.state.ts.

```ts
imports: [
  // ...
  StoreModule.forRoot(reducers)
],
```

## Step 7 - Dispatch From Component

Add an observable for our banana state in the banana.component.ts file.
Then add a function to dispatch an action to get a new banana.

```ts
banana$!: Observable<any>;

constructor(private store: Store<AppState>) {
}

ngOnInit() {
  this.newBanana();
  this.banana$ = this.store.pipe(select(getMyBanana));
}

newBanana() {
  this.store.dispatch(new GetNewBanana(null));
}
```

## Step 8 - Adding More Actions

Repeat the process of adding an action, case in the reducer, and dispatch function in the component for peeling and eating a banana.
