import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroup from './CheckboxGroup';

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Claims',
  checkboxes: ['All', 'Supported', 'Unsupported'],
  checkedValues: ['All'],
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  title: 'Sources',
  checkboxes: [
    'All',
    'Supported',
    'Unsupported',
    'Academia',
    'News',
    'Social Media',
  ],
  checkedValues: ['All', 'Supported', 'Unsupported'],
  helperText: 'Please accept our terms and conditons',
};

export const WithDisabledValues = Template.bind({});
WithDisabledValues.args = {
  title: 'Sources',
  checkboxes: [
    'All',
    'Supported',
    'Unsupported',
    'Academia',
    'News',
    'Social Media',
  ],
  disabled: ['Academia', 'News', 'Social Media'],
  checkedValues: [
    'All',
    'Supported',
    'Unsupported',
    'Academia',
    'News',
    'Social Media',
  ],
};
