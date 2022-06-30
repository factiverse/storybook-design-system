import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    disabled: {
      control: 'check',
      options: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
    },
    checkedValues: {
      control: 'check',
      options: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
    },
    helperText: { control: 'text' },
    allCheckbox: {
      control: { type: 'boolean' },
    },
    margin: {
      control: {
        options: ['none', 'normal', 'dense'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Claims',
  checkboxes: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
  checkedValues: ['Supported'],
};

export const CheckedAll = Template.bind({});
CheckedAll.args = {
  title: 'Claims',
  checkboxes: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
  checkedValues: [
    'Supported',
    'Unsupported',
    'Academia',
    'News',
    'Social Media',
  ],
  allCheckbox: true,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  title: 'Sources',
  checkboxes: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
  checkedValues: ['Supported', 'Unsupported'],
  helperText: 'Please accept our terms and conditons',
};

export const WithDisabledValues = Template.bind({});
WithDisabledValues.args = {
  title: 'Sources',
  checkboxes: ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media'],
  disabled: ['Academia', 'News', 'Social Media'],
  checkedValues: [
    'Supported',
    'Unsupported',
    'Academia',
    'News',
    'Social Media',
  ],
};
