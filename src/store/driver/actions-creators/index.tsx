import {Dispatch} from 'redux';
import {ActionType} from '../../../store/driver/actions-types';
import {Action} from '../../../store/driver/actions';
import {apiUri, baseURL} from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 * @param fn
 */
export const getDrivers = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DRIVER_INIT,
    });
    try {
      const response = await service.post(baseURL + apiUri.auth.drivers, {
        userid: data.userid,
      });
      dispatch({
        type: ActionType.DRIVER_GET_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.DRIVER_GET_FAILED,
        payload: 'Something went wrong! Please try again later',
      });
    }
  };
};
