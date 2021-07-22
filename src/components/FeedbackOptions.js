import React from "react";
const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div className="buttons">
      <button className="Btn" type="button" onClick={onIncrementGood}>
        Good
      </button>
      <button className="Btn" type="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button className="Btn" type="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
