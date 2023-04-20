import {ActionType} from '../../../store/home/actions-types';

interface HomeInit {
  type: ActionType.HOME_INIT;
}

interface HomeSuccessAction {
  type: ActionType.HOME_GET_SUCCESS;
  payload: number;
}

interface HomeErrorAction {
  type: ActionType.HOME_GET_FAILED;
  payload: string;
}

export type Action = HomeInit | HomeSuccessAction | HomeErrorAction;
