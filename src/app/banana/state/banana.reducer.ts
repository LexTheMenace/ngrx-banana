import * as BananaActions from './banana.actions';

export function reducer(state: any, action: BananaActions.BananaAction) {
  console.log(action);

  switch (action.type) {
    case BananaActions.GET_NEW_BANANA:
      return {
        isPeeled: false,
        bitesRemaining: 9,
        color: 'yellow',
      };
    case BananaActions.PEEL_BANANA:
      return {
        ...state,
        isPeeled: true,
      };
    case BananaActions.EAT_BANANA:
      return {
        ...state,
        bitesRemaining: state.bitesRemaining - action.payload
      };
    default:
      return { ...state };
  }
}
