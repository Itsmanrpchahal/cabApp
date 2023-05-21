import {produce} from 'immer';
import {Action} from '../../../store/addDriver/actions';
import {ActionType} from '../../../store/addDriver/actions-types';

interface RepositoriesStateInterface {
  adddriverLoading: boolean;
  error: string | null;
  adddriverData: any;
}

const initialState = {
  adddriverLoading: false,
  error: null,
  adddriverData: {},
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
      case ActionType.ADD_DRIVER_INIT:
        draft.adddriverLoading = true;
        draft.error = null;
        draft.adddriverData = {};
        return draft;
      case ActionType.ADD_DRIVER_GET_SUCCESS:
        draft.adddriverLoading = false;
        draft.error = null;

        draft.adddriverData = action.payload;
        return draft;
      case ActionType.ADD_DRIVER_GET_FAILED:
        draft.adddriverLoading = false;
        draft.error = action.payload;
        draft.adddriverData = action.payload;
        return draft;
      default:
        return draft;
    }
  });

export default reducer;
