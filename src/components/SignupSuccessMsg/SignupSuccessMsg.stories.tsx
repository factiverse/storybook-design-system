import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignupSuccessMsg from '../SignupSuccessMsg';

export default {
  title: 'Components/SignupSuccessMsg',
  component: SignupSuccessMsg,
} as ComponentMeta<typeof SignupSuccessMsg>;

const Template: ComponentStory<typeof SignupSuccessMsg> = (args) => (
  <SignupSuccessMsg {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const noCloseButton = Template.bind({});
noCloseButton.args = {
  withCloseButton: false,
};

export const message = () => <SignupSuccessMsg />;
