import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
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
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  };
  render() {
    return (
      <div className="feedback">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onIncrementGood={this.feedbackIncrementGood}
            onIncrementNeutral={this.feedbackIncrementNeutral}
            onIncrementBad={this.feedbackIncrementBad}
          />
        </Section>
        <Section title={"Statistics"}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
export default FeedbackCounter;
//<h2 className="heading">Please leave feedback</h2>
//<h2 className="heading">Statistics</h2>
