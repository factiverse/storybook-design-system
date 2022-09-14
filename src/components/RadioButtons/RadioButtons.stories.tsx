import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioButtons from './RadioButtons';

export default {
  title: 'Composite Components/RadioButtons',
  component: RadioButtons,
  argTypes: {
    margin: {
      control: {
        options: ['none', 'normal', 'dense'],
        type: 'radio',
      },
    },
    size: {
      control: {
        options: ['small', 'medium'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof RadioButtons>;

const Template: ComponentStory<typeof RadioButtons> = (args) => (
  <RadioButtons {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Credibility',
  radioButtons: ['High to low', 'Low to high'],
  defaultValue: 'High to low',
};

export const Multiple = Template.bind({});
Multiple.args = {
  title: 'Select your favorite fruit:',
  radioButtons: ['Apple', 'Banana', 'Mango', 'Cherry', 'Strawberry', 'Orange'],
  defaultValue: 'Mango',
};
