import {produce} from 'immer';
import {Action} from '../../../store/driver/actions';
import {ActionType} from '../../../store/driver/actions-types';

interface RepositoriesStateInterface {
  driverLoading: boolean;
  error: string | null;
  driverData: any;
}

const initialState = {
  driverLoading: false,
  error: null,
  driverData: [],
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
      case ActionType.DRIVER_INIT:
        draft.driverLoading = true;
        draft.error = null;
        draft.driverData = {};
        return draft;
      case ActionType.DRIVER_GET_SUCCESS:
        draft.driverLoading = false;
        draft.error = null;

        draft.driverData = action.payload;
        return draft;
      case ActionType.DRIVER_GET_FAILED:
        draft.driverLoading = false;
        draft.error = action.payload;
        draft.driverData = action.payload;
        return draft;
      default:
        return draft;
    }
  });

export default reducer;
