import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <p className="title">Good:{good}</p>
      <p className="title">Neutral:{neutral}</p>
      <p className="title">Bad:{bad}</p>
      <p className="title">Total:{total}</p>
      <p className="title">
        Positive feedback:{Math.round(positivePercentage)}%
      </p>
    </div>
  );
};
export default Statistics;
