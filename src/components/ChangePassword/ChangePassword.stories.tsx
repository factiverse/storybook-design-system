import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChangePassword from './ChangePassword';

export default {
  title: 'Components/ChangePassword',
  component: ChangePassword,
} as ComponentMeta<typeof ChangePassword>;

const Template: ComponentStory<typeof ChangePassword> = (args) => (
  <ChangePassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => console.log('submit'),
  message: '',
  loading: false,
};
