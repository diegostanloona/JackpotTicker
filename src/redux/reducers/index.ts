import { combineReducers } from 'redux';
import appReducer from './appReducer';
import jackpotReducer from './jackpotReducer';

export const rootReducer = combineReducers({
  appReducer,
  jackpotReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;