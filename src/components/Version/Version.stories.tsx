import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Version from './Version';

export default {
  title: 'Components/Version',
  component: Version,
  argTypes: {
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
    title: {
      type: 'string',
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Version>;

const Template: ComponentStory<typeof Version> = (args) => (
  <Version {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
};
