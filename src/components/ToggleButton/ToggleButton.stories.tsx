import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';
import SupportIcon from '../SupportIcon';

export default {
  title: 'Base Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    children: {
      control: {
        type: 'children',
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const SupportIconToggle = Template.bind({});
SupportIconToggle.args = {
  handleChange: () => console.log('handleChange'),
  selected: true,
  children: (
    <SupportIcon variant="disputing" value={30} label="Disputing" count={5} />
  ),
};
