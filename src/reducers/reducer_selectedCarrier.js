import { SELECTED_CARRIER } from '../actions/index';

export default function(state = [], action) {
  console.log("hello2.0");
  switch (action.type) {
    case SELECTED_CARRIER:
      console.log('Hello');
      return;
    default:
      return state;
  }
} 