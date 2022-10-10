import to from "await-to-js";
import { batch } from "react-redux";

import { AppDispatchType } from "../store";
import { AppActions } from "../models/App";
import { IJackpotData, JackpotActions } from "../models/Jackpot";
import { getJackpotDataService } from "../services/jackpotServices";

export const getJackpotDataAction = () => {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: JackpotActions.PROCESSING_REQUEST, payload: true });
    const [error, jackpotData] = await to<IJackpotData>(
      getJackpotDataService(),
    );
    if (error) {
      return batch(() => {
        dispatch({ type: AppActions.ERROR, payload: error });
      });
    }
    return dispatch({ type: JackpotActions.SET_JACKPOT_DATA, payload: jackpotData });
  };
};
