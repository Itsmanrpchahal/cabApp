import {Dispatch} from 'redux';
import {ActionType} from '../../../store/addDriver/actions-types';
import {Action} from '../../../store/addDriver/actions';
import {apiUri, baseURL} from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 * @param fn
 */
export const addDrivers = (data: any) => {
  console.log('DATA ===> ', data);
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_DRIVER_INIT,
    });
    try {
      const response = await service.post(
        baseURL + apiUri.auth.addDriver,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      dispatch({
        type: ActionType.ADD_DRIVER_GET_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.ADD_DRIVER_GET_FAILED,
        payload: 'Something went wrong! Please try again later',
      });
    }
  };
};
