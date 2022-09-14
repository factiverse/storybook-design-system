import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tutorial from './Tutorial';
import editor from '../../img/Editor.png';

export default {
  title: 'Composite Components/Tutorial',
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
      label: 'Welcome to Factiverse! A universe where facts matter.',
      description:
        'We are here to give you an overview of the most credible information on all sides of a given topic, claim or article.',
    },
    {
      label:
        'Select a claim or type your own and explore sources from every perspective.',
      description:
        'Please keep in mind our AI is in development and some results might be off.',
      imageUrl: editor,
    },
    {
      label: 'third step heading',
      description: 'third step body text',
      imageUrl: editor,
    },
    {
      label: 'fifth step heading',
      description: `fifth step body text`,
      imageUrl: editor,
    },
    {
      label: 'Last step heading',
      description: `Last step body text`,
    },
  ],
};
