import { Component } from "react";

import { Section } from "components/Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions />
        </Section>
      </>
    );
  };
};
