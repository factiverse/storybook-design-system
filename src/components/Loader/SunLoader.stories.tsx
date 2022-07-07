import React from 'react';
import { ComponentMeta } from '@storybook/react';
import SunLoader from './SunLoader';
import { Story } from '@storybook/react';

export default {
  title: 'Components/SunLoader',
  component: SunLoader,
} as ComponentMeta<typeof SunLoader>;

const Template: Story = ({ ...args }) => <SunLoader {...args} />;

export const SunLoaderWithText = Template.bind({});
SunLoaderWithText.args = {
  loadingText: 'Unblurring the lines ...',
};
