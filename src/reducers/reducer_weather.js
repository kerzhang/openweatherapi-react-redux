import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
    // Don't mute state directly, create a new state and return
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state];
  }
  return state;
}
