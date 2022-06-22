import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircularSupportIndicator from './circularSupportIndicator';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Circular Support Indicator',
  component: CircularSupportIndicator

} as ComponentMeta<typeof CircularSupportIndicator>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CircularSupportIndicator> = (args) => <CircularSupportIndicator {...args} />;

export const circularIndicator:  ComponentStory<typeof CircularSupportIndicator> = (args) => <CircularSupportIndicator {... args} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
circularIndicator.args = {
score: 1,
labels: ['disputing', 'balanced', 'supporting'],
tooltips: []
};
