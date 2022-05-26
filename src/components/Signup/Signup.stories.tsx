import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Signup from './Signup';

export default {
  title: 'Components/Signup',
  component: Signup,
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => console.log('submit'),
  message: '',
  loading: false,
};
