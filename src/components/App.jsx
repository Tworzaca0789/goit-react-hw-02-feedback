import React, { Component } from "react";
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClick = (variant) => {
    this.setState((prevState) => ({ [variant]: prevState[variant] + 1 }));
  };
  //the total number of responses collected from all categories
  //ogólna ilości zebranych odpowiedzi ze wszystkich kategorii 
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }
    
  //percentage of positive responses
  // procent pozytywnych odpowiedzi
  countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  let positivePercentage = Math.round((good * 100) / this.countTotalFeedback());
  return positivePercentage;
 };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    )
  }
  }
export default App;

