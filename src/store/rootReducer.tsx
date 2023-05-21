import {combineReducers} from 'redux';
import homeData from '../store/home/reducer';
import loginData from '../store/login/reducer';
import driverData from '../store/driver/reducer';
import adddriverData from '../store/addDriver/reducer';
const reducers = combineReducers({
  homeData,
  loginData,
  driverData,
  adddriverData,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
