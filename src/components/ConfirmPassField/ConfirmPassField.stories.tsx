import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ConfirmPassField from './ConfirmPassField';

export default {
  title: 'Components/ConfirmPassField',
  component: ConfirmPassField,
} as ComponentMeta<typeof ConfirmPassField>;

const Template: ComponentStory<typeof ConfirmPassField> = (args) => (
  <ConfirmPassField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  actions: {
    values: { passwordConfirmation: 'dsnkjn' },
    handleChange: () => console.log('handleChange'),
    touched: { passwordConfirmation: true },
    errors: { passwordConfirmation: '' },
  },
};
