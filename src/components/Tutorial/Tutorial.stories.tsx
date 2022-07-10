import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tutorial from './Tutorial';

export default {
  title: 'Components/Tutorial',
  component: Tutorial,
  argTypes: {
    children: {
      control: {
        type: 'children',
      },
    },
  },
} as ComponentMeta<typeof Tutorial>;

const Template: ComponentStory<typeof Tutorial> = (args) => (
  <Tutorial {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: 'I am tooltip',
};
