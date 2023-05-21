import {Dispatch} from 'redux';
import {ActionType} from '../../../store/login/actions-types';
import {Action} from '../../../store/login/actions';
import {apiUri, baseURL} from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 * @param fn
 */
export const loginAPI = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGIN_INIT,
    });
    try {
      console.log('data ' + JSON.stringify(data));
      const response = await service.post(baseURL + apiUri.auth.login, {
        email: data.email,
        password: data.password,
      });
      dispatch({
        type: ActionType.LOGIN_GET_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.LOGIN_GET_FAILED,
        payload: 'Something went wrong! Please try again later',
      });
    }
  };
};
