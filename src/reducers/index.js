import { combineReducers } from 'redux';
import weatherReducer from './reducerWeather';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  weather: weatherReducer
});

export default rootReducer;
