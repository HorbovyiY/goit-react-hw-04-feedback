import React from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends React.Component { 
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };
  
  countTotalFeedback() { 
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() { 
    return (this.state.good / this.countTotalFeedback()*100).toFixed(); 
  }

  addFeedback = (level) =>{ 
    this.setState((prevState) => { 
      return {[level]: prevState[level] + 1} 
    })
  }
  
  render() { 
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
      >
        <Section title="Please, leave feedback">
          <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addFeedback}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {this.state.good + this.state.neutral + this.state.bad === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}>
          </Statistics> }
        </Section>
    </div>
  );
  }
}
