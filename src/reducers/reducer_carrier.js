import { FETCH_CARRIER_CITY, SELECTED_CARRIER } from '../actions/index';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CARRIER_CITY:
      return _.mapKeys(action.payload.data, 'Id');
    case SELECTED_CARRIER:
      return { ...state, [action.payload.data.Id]: action.payload.data };
    default:
      return state;
  }
} 