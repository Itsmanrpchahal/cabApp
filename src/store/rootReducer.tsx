import {combineReducers} from 'redux';
import homeData from '../store/home/reducer';
const reducers = combineReducers({
  homeData,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
