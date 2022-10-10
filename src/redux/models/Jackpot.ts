export interface IJackpotData {
  //Check pdf
}
export interface JackpotReducer {
  jackpotData: IJackpotData;
  processingRequest: boolean;
}
export enum JackpotActions {
  PROCESSING_REQUEST = 'PROCESSING_REQUEST',
  SET_JACKPOT_DATA = 'SET_JACKPOT_DATA',
}
export interface JackpotActionType<T, P> {
  type: T;
  payload: P;
}
export type JackpotAction =
  | JackpotActionType<typeof JackpotActions.SET_JACKPOT_DATA, IJackpotData>
  | JackpotActionType<typeof JackpotActions.PROCESSING_REQUEST, boolean>;
