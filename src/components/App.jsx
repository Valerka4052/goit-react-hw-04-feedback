import { Component } from "react";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  onLeaveFeedback = (e) => {
    let stateItem = e.target.innerText;
    this.setState((pevState) => {
      return ({ [stateItem]: pevState[stateItem] + 1 });
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad, } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(((this.state.good) / this.countTotalFeedback() * 100));
  };

  render() {
    return (<div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }
      }>
      <Section title="Please live a feedback">
        <FeedbackOptions options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() === 0 ?
          <Notification message="There is no feedback" />
          : <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics>}
      </Section>
    </div>
    );
  };
};
