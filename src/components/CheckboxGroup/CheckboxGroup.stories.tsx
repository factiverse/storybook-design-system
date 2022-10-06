import React, { useState, ChangeEvent, useCallback } from 'react';
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

export const WithState = () => {
  const [checkbox, setCheckbox] = useState<string[]>(['Supported']);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const checked = event.target.value;
      const checkedValues = isChecked
        ? [...checkbox, checked]
        : [...checkbox.filter((c) => c !== checked)];
      setCheckbox(checkedValues);
    },
    [checkbox]
  );

  const handleChangeAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.target.checked;
      const checkedValues = isChecked
        ? ['Supported', 'Unsupported', 'Academia', 'News', 'Social Media']
        : [];
      setCheckbox(checkedValues);
    },
    []
  );

  return (
    <CheckboxGroup
      allCheckbox={true}
      handleChangeAll={handleChangeAll}
      handleChange={handleChange}
      title="Claims"
      checkedValues={checkbox}
      checkboxes={[
        'Supported',
        'Unsupported',
        'Academia',
        'News',
        'Social Media',
      ]}
    />
  );
};

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
