import axios from 'axios';
import { IJackpotData } from '../models/Jackpot';

export function getJackpotDataService(): Promise<IJackpotData> {
  return new Promise((resolve, reject) => {
    axios.get(
      `url check pdf`,
      {
        headers: {
          //check pdf
        },
      },
    )
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
  });
}