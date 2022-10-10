import React, { useEffect } from 'react';

import JackpotWidget from './JackpotWidget';

type JackpotWidgetProps = {
  jackpotId: string;
  imageUrl: string;
};

// Logical component used to make the API calls outside of any page
const JackpotWidgetContainer = ({ jackpotId, imageUrl }: JackpotWidgetProps) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      //Call API
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <JackpotWidget jackpotId={jackpotId} imageUrl={imageUrl} />
  );
};

export default JackpotWidgetContainer;
