import { FETCH_CARRIER_CITY, SELECTED_CARRIER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARRIER_CITY:
      return [ action.payload.data ];
    case SELECTED_CARRIER:
      console.log(action.payload.data);
      return console.log('You are sexy');
    default:
      return state;
  }
} 