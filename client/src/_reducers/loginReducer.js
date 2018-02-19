import { gConstants } from '../_components/constants';


export const login = (state = {}, action) => {
  console.log('rootReducer was called with state', state, 'and action', action)

  switch (action.type) {
      case gConstants.LOGIN_REQUEST:
        return {
          loggingIn: true,
          user: action.user
        };
      // etc.
      case gConstants.LOGIN_FAILURE:
        return {};
      default:
          return state;
  }
}