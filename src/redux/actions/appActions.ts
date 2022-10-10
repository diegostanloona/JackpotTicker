import { AppActions } from '../models/App';

export function setError(message: null | string) {
  return {
    type: AppActions.ERROR,
    payload: message,
  };
}
