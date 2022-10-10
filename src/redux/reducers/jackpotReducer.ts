import { JackpotAction, JackpotActions, JackpotReducer } from "../models/Jackpot";

export const initialState: JackpotReducer = {
  jackpotData: {
    //check pdf
  },
  processingRequest: false,
};
export default function jackpotReducer(
  state = initialState,
  action: JackpotAction,
): JackpotReducer {
  switch (action.type) {
    case JackpotActions.SET_JACKPOT_DATA: {
      return {
        ...state,
        jackpotData: action.payload
      };
    }
    case JackpotActions.PROCESSING_REQUEST: {
      return {
        ...state,
        processingRequest: action.payload,
      };
    }
    default:
      return state;
  }
}
