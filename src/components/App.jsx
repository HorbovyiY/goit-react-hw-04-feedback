import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad]=useState(0)
  
  const countTotalFeedback=()=> { 
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage =() =>{ 
    return (good/countTotalFeedback()*100).toFixed(); 
  }

  const addFeedback = (level) => { 
    if (level === 'good') { 
      setGood(state=>state+1)
    }
    if (level === 'neutral') { 
      setNeutral(state=>state+1)
    }
    if (level === 'bad') { 
      setBad(state=>state+1)
    }
  }
  
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
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}>
          </FeedbackOptions>
        </Section>
        
        <Section title="Statistics">
          {good + neutral + bad === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}>
          </Statistics> }
        </Section>
    </div>
  );
}
