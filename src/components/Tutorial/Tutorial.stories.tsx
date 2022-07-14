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
  productName: 'Editor',
  steps: [
    {
      label: 'First step heading',
      description: `first step body text`,
    },
    {
      label: 'second step heading',
      description: `second step body text`,
    },
    {
      label: 'third step heading',
      description: 'third step body text',
    },
    {
      label: 'fifth step heading',
      description: `fifth step body text`,
    },
    {
      label: 'Last step heading',
      description: `Last step body text`,
    },
  ],
};
