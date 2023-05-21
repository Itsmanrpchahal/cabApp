import {ActionType} from '../../../store/driver/actions-types';

interface HomeInit {
  type: ActionType.DRIVER_INIT;
}

interface HomeSuccessAction {
  type: ActionType.DRIVER_GET_SUCCESS;
  payload: number;
}

interface HomeErrorAction {
  type: ActionType.DRIVER_GET_FAILED;
  payload: string;
}

export type Action = HomeInit | HomeSuccessAction | HomeErrorAction;
