import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import { SelectChangeEvent } from '@mui/material';

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

export const WithState = () => {
  const [dropdown, setDropdown] = useState<string>('days');
  return (
    <Dropdown
      values={['days', 'months', 'years']}
      value={dropdown}
      label="Choose duration"
      handleChange={(event: SelectChangeEvent) => {
        setDropdown(event.target.value);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Choose duration',
  values: ['days', 'months', 'years'],
  value: 'days',
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  values: ['days', 'months', 'years'],
  value: 'days',
};
