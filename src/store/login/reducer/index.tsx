import {produce} from 'immer';
import {Action} from '../../../store/login/actions';
import {ActionType} from '../../../store/login/actions-types';

interface RepositoriesStateInterface {
  loginLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  loginData: any;
}

const initialState = {
  loginLoading: false,
  error: null,
  isAuthenticated: false,
  loginData: {},
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
      case ActionType.LOGIN_INIT:
        draft.loginLoading = true;
        draft.error = null;
        draft.isAuthenticated = false;
        draft.loginData = {};
        return draft;
      case ActionType.LOGIN_GET_SUCCESS:
        draft.loginLoading = false;
        draft.error = null;
        draft.isAuthenticated = true;
        draft.loginData = action.payload;
        return draft;

      case ActionType.LOGIN_AUTHENTICATION:
        draft.loginLoading = false;
        draft.loginData = action.payload;
        return draft;

      case ActionType.LOGIN_GET_FAILED:
        draft.loginLoading = false;
        draft.error = null;
        draft.isAuthenticated = false;
        draft.loginData = {};
        return draft;
      default:
        return draft;
    }
  });

export default reducer;
