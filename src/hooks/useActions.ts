import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHome,loginAPI,getDrivers,addDrivers} from '../store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Object.assign({}, getHome,loginAPI,getDrivers,addDrivers), dispatch);
};
