import { combineReducers } from 'redux';
import CarrierCity from './reducer_carrier';


const rootReducer = combineReducers({
  city: CarrierCity
});

export default rootReducer;