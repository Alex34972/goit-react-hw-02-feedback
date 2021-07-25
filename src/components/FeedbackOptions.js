import React from "react";
import s from "./FeedbackStat.module.css";
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="buttons">
      <button
        className={s.Btn}
        type="button"
        name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.Btn}
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.Btn}
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
