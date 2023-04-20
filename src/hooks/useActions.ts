import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHome} from '../store';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Object.assign({}, getHome), dispatch);
};
