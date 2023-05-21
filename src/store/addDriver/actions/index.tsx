import {ActionType} from '../../../store/addDriver/actions-types';

interface HomeInit {
  type: ActionType.ADD_DRIVER_INIT;
}

interface HomeSuccessAction {
  type: ActionType.ADD_DRIVER_GET_SUCCESS;
  payload: number;
}

interface HomeErrorAction {
  type: ActionType.ADD_DRIVER_GET_FAILED;
  payload: string;
}

export type Action = HomeInit | HomeSuccessAction | HomeErrorAction;
