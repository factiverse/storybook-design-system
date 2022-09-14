import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Loading from './Loading';
import { Story } from '@storybook/react';

export default {
  title: 'Base Components/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: Story = ({ ...args }) => (
  <Loading
    labels={[
      'Unblurring the lines ...',
      'Estimating support ...',
      'Considering credibility ...',
      'Bursting filter bubbles ...',
      'Unblurring the lines ...',
    ]}
    {...args}
  />
);

export const Default = Template.bind({});
