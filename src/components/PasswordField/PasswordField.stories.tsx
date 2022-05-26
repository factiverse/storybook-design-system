import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PasswordField from './PasswordField';

export default {
  title: 'Components/PasswordField',
  component: PasswordField,
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = (args) => (
  <PasswordField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  actions: {
    values: { password: 'dsnkjn' },
    handleChange: () => console.log('handleChange'),
    touched: { password: '' },
    errors: { password: '' },
  },
};
