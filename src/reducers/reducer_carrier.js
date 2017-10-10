import { FETCH_CARRIER_CITY } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_CARRIER_CITY:
      return [ action.payload.data ];
    default:
      return state;
  }
} 