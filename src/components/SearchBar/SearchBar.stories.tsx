import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './SearchBar';

import { within, userEvent, waitFor } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    value: {
      type: 'string',
    },
    onSearch: {
      action: true,
    },
    onChange: {
      action: true,
    },
    color: {
      control: {
        options: [
          'primary',
          'secondary',
          'success',
          'error',
          'info',
          'warning',
          undefined,
        ],
        type: 'select',
      },
    },
    label: {
      type: 'string',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    focused: {
      control: { type: 'boolean' },
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});

export const Focused = Template.bind({});
Focused.args = {
  focused: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Type your own claim',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Headline',
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  error: true,
  helperText: 'Please enter a longer search text.',
};

export const FilledSearchBar = Template.bind({});
FilledSearchBar.play = async ({ args, canvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // Simulate interactions with the component
  await userEvent.type(canvas.getByRole('textbox'), 'Testing the text input');

  // Assert DOM structure
  await expect(canvas.getByRole('textbox')).toHaveValue(
    'Testing the text input'
  );

  await userEvent.click(canvas.getByRole('button'));

  // onSearch should have been called after clicking the button
  await waitFor(() => expect(args.onSearch).toHaveBeenCalled());

  // onChange should have been called after typing
  // eslint-disable-next-line jest/no-standalone-expect
  await waitFor(() => expect(args.onChange).toHaveBeenCalled());
};
