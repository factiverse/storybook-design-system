import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SupportIndicator from './SupportIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Support Indicator',
  component: SupportIndicator,
} as ComponentMeta<typeof SupportIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SupportIndicator> = (args) => (
  <SupportIndicator {...args} />
);

export const WithLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLabel.args = {
  score: 1,
  labels: ['disputing', 'balanced', 'supporting'],
  tooltips: [],
  type: 'bar',
};

export const WithoutLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutLabel.args = {
  score: 1,
  tooltips: [],
  type: 'bar',
};

export const Circular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Circular.args = {
  score: 1,
  labels: ['disputing', 'balanced', 'supporting'],
  tooltips: [],
  type: 'circle',
};
