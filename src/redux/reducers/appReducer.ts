import { App, AppAction, AppActions } from "../models/App";

const initialState: App = {
  error: '',
};

export default function appReducer(
  state = initialState,
  action: AppAction,
): App {
  switch (action.type) {
    case AppActions.ERROR: {
      let message = 'Unknown error.';
      if (typeof action.payload === 'string') {
        message = action.payload;
      }
      return {
        ...state,
        error: message,
      };
    }
    default:
      return state;
  }
}