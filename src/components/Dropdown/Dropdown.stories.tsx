import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Choose duration',
  handleChange: () => console.log('handleChange'),
  values: ['days', 'months', 'years'],
  defaultValue: 'days',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  handleChange: () => console.log('handleChange'),
  values: ['days', 'months', 'years'],
  defaultValue: 'days',
};
