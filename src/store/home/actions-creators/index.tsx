import {Dispatch} from 'redux';
import {ActionType} from '../../../store/home/actions-types';
import {Action} from '../../../store/home/actions';
import {apiUri} from '../../../service/apiEndPoints';
import service from '../../../service/axios';

/**
 * @param fn
 */
export const getHome = (data: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HOME_INIT,
    });
    try {
      console.log('count ' + JSON.stringify(data));
      const response = await service.get(
        'https://reqres.in/api/users?page=' + data.page,
      );
      dispatch({
        type: ActionType.HOME_GET_SUCCESS,
        payload: response.data,
      });
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.HOME_GET_FAILED,
        payload: 'Something went wrong! Please try again later',
      });
    }
  };
};
