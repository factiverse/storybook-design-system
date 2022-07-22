import React from 'react';
import { Story, Meta } from '@storybook/react';
import SupportIndicator from './SupportIndicator';

export default {
  title: 'Components/SupportIndicator',
  component: SupportIndicator,
} as Meta;

const Template: Story = ({ ...args }) => (
  <SupportIndicator score={1} variant="bar" {...args} />
);

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  labels: ['disputing', 'balanced', 'supporting'],
};

export const WithTooltips = Template.bind({});
WithTooltips.args = {
  labels: ['Disputing', 'Conflicting sources', 'Supporting'],
  tooltips: [
    'Most found sources are disputing this.',
    'Found sources are conflicting.',
    'Most found sources are supporting this.',
  ],
};

export const Balanced = Template.bind({});
Balanced.args = {
  score: 0.5,
};

export const Disputing = Template.bind({});
Disputing.args = {
  score: 0.1,
};

export const Circular = Template.bind({});
Circular.args = {
  variant: 'circle',
};

export const CircularBalanced = Template.bind({});
CircularBalanced.args = {
  score: 0.5,
  variant: 'circle',
};

export const CircularDisputing = Template.bind({});
CircularDisputing.args = {
  score: 0.1,
  variant: 'circle',
};

export const CircularWithTooltip = Template.bind({});
CircularWithTooltip.args = {
  tooltips: [
    'Most found sources are disputing this.',
    'Found sources are conflicting.',
    'Most found sources are supporting this.',
  ],
  variant: 'circle',
};
