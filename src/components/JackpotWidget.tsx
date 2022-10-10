import React from 'react';

type JackpotWidgetProps = {
  jackpotId: string;
  imageUrl: string;
};

const JackpotWidget = ({ jackpotId, imageUrl }: JackpotWidgetProps) => {
  return (
    <div className="jackpotContainer">
      <div className="jackpotBar">
        <div className="jackpotValue">
          $482.82
        </div>
      </div>
      <div className="jackpotTimer">
        Must be won in 04:45:59
      </div>
    </div>
  );
};

export default JackpotWidget;
