import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CarrierCity from './reducer_carrier';
import CarrierDetails from './reducer_carrier';

const rootReducer = combineReducers({
  city: CarrierCity,
  selected: CarrierDetails
});

export default rootReducer;