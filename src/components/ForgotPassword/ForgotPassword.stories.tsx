import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ForgotPassword from './ForgotPassword';

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => console.log('submit'),
  message: '',
  loading: false,
};
