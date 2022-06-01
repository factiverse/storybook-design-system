import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EmailField, { defaultEmailActions } from './EmailField';

export default {
  title: 'Components/EmailField',
  component: EmailField,
} as ComponentMeta<typeof EmailField>;

const Template: ComponentStory<typeof EmailField> = (args) => (
  <EmailField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  actions: defaultEmailActions,
};
