import React from "react";
class FeedbackCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  feedbackIncrementGood = () => {
    this.setState((prevState) => ({ good: prevState.good + 1 }));
  };
  feedbackIncrementNeutral = () => {
    this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
  };
  feedbackIncrementBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiv = (this.state.good / total) * 100;

    return (
      <div className="feedback">
        <h2 className="heading ">Please leave feedback</h2>
        <button
          className="Btn"
          type="button"
          onClick={this.feedbackIncrementGood}
        >
          Good
        </button>
        <button
          className="Btn"
          type="button"
          onClick={this.feedbackIncrementNeutral}
        >
          Neutral
        </button>
        <button
          className="Btn"
          type="button"
          onClick={this.feedbackIncrementBad}
        >
          Bad
        </button>
        <h2 className="heading ">Statistics</h2>
        <p className="title">Good:{this.state.good}</p>
        <p className="title">Neutral:{this.state.neutral}</p>
        <p className="title">Bad:{this.state.bad}</p>
        <p className="title">Total:{total}</p>
        <p className="title">Positive feedback:{Math.round(positiv)}%</p>
      </div>
    );
  }
}
export default FeedbackCounter;
