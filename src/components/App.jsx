import { Component } from 'react';
import { FeedbackOptions, Notification, Section, Statistics } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const option = event.target.textContent;
    this.setState(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
    event.target.blur(); // => Removing focus after a button-click
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state); // =>  Converting state keys into an array of strings according to Prop-types of FeedbackOptions

    return (
      <div className="container">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification text="There is no feedback" />
          ) : (
            <>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
              <Notification text="Thanks for your feedback!" />
            </>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
