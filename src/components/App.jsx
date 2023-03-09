// import { Component } from "react";
import { FeedbackOptions } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

export function App () {

  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [good, setGood] = useState(0);

  const feedbackState = { good, bad, neutral };

  const onLeaveFeedback = (e) => {
    let stateItem = e.target.innerText;
    if (stateItem === 'bad') {
      return setBad(bad + 1);
    }
    if (stateItem === 'neutral') {
      return setNeutral(neutral + 1);
    }
    if (stateItem === 'good') {
      return setGood(good + 1);
    }
  };

 const countTotalFeedback = () => {
    return good + neutral + bad;
  };

 const countPositiveFeedbackPercentage = () => {
    return Math.round(((good) / countTotalFeedback() * 100));
  };


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
        <FeedbackOptions options={Object.keys(feedbackState)}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ?
          <Notification message="There is no feedback" />
          : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics>}
      </Section>
    </div>
    );
  };

