import {produce} from 'immer';
import {Action} from '../../../store/home/actions';
import {ActionType} from '../../../store/home/actions-types';

interface RepositoriesStateInterface {
  homeLoading: boolean;
  error: string | null;
  homeData: any;
  listData: any;
}

const initialState = {
  homeLoading: false,
  error: null,
  homeData: {},
  listData: [],
};

/**
 * @param state
 * @param action
 */
const reducer = (
  state: RepositoriesStateInterface = initialState,
  action: Action,
): RepositoriesStateInterface =>
  produce(state, draft => {
    switch (action.type) {
      case ActionType.HOME_INIT:
        draft.homeLoading = true;
        draft.error = null;
        draft.homeData = {};
        return draft;
      case ActionType.HOME_GET_SUCCESS:
        draft.homeLoading = false;
        draft.error = null;

        draft.homeData = action.payload;
        return draft;
      case ActionType.HOME_GET_FAILED:
        draft.homeLoading = false;
        draft.error = 'Somethings wents wrong';
        draft.homeData = action.payload;
        return draft;
      default:
        return draft;
    }
  });

export default reducer;
