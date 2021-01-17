import './App.css';
import React from 'react';
import Statistics from './components/Statistics/Statistics';
import Feedback from './components/Feedback/Feedback';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  static defaultProps = {
    goodInitialValue: 0,
    neutralInitialValue: 0,
    badInitialValue: 0,
  };

  state = {
    good: this.props.goodInitialValue,
    neutral: this.props.neutralInitialValue,
    bad: this.props.badInitialValue,
  };
  handleChangeOption = event => {
    const optionName = event.target.name;
    this.setState(prevState => ({
      [optionName]: prevState[optionName] + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const positivePercent =
      Math.round((good / (good + neutral + bad)) * 100) || 0;
    return positivePercent;
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title='Please leave feedback'>
          <Feedback
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleChangeOption}
          />
        </Section>

        <Section title='Statistics'>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message='No feedback given' />
          )}
        </Section>
      </>
    );
  }
}

export default App;
