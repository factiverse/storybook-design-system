import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import WikipediaIcon from '../../icons/WikipediaIcon';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text', defaultValue: 'All Topics' },
    startIcon: {
      control: {
        type: 'element',
      },
    },
    typographyVariant: {
      control: 'radio',
      options: ['button', 'body1'],
    },
    buttonWithIcon: { control: 'text' },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttons: ['All Topics', 'Ukraine', 'COVID-19'],
  value: 'All Topics',
};

export const WithState = () => {
  const [value, setValue] = useState<string>('Ukraine');
  return (
    <ButtonGroup
      buttons={['All Topics', 'Ukraine', 'COVID-19']}
      value={value}
      onClick={setValue}
    />
  );
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Discover recent fact checks on:',
  buttons: ['All Topics', 'Ukraine', 'COVID-19'],
  value: 'All Topics',
};

export const LanguageButtons = Template.bind({});
LanguageButtons.args = {
  title: 'Select language',
  buttons: ['Wikipedia', 'Store Norske Leksikon'],
  startIcon: <WikipediaIcon />,
  value: 'Wikipedia',
  buttonWithIcon: 'Wikipedia',
  selectedButtonStyles: {
    backgroundColor: 'black',
    color: 'white',
    boxShadow: 'none',
    borderRadius: '10px',
  },
  unselectedButtonStyles: {
    boxShadow: 'none',
    borderRadius: '10px',
    backgroundColor: 'lightgrey',
  },
};
