import { combineReducers } from 'redux';

import LandingReducer from './pages/Landing/reducer';


export default combineReducers({
  landing: LandingReducer
});
