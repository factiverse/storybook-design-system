import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Login from './Login';

export default {
  title: 'Components/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => console.log('submit'),
  message: '',
  loading: false,
};
