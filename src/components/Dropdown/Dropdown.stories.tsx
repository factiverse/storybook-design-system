import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    margin: {
      control: {
        options: ['none', 'normal', 'dense'],
        type: 'radio',
      },
    },
    label: { control: 'text' },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Choose duration',
  values: ['days', 'months', 'years'],
  defaultValue: 'days',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  values: ['days', 'months', 'years'],
  defaultValue: 'days',
};
