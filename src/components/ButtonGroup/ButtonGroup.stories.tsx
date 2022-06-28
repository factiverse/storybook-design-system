import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import WikipediaIcon from '../../icons/WikipediaIcon';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    title: { control: 'text' },
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
  onClick: () => console.log('All topics'),
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  title: 'Discover recent fact checks on:',
  buttons: ['All Topics', 'Ukraine', 'COVID-19'],
  value: 'All Topics',
  onClick: () => console.log('All topics'),
};

export const LanguageButtons = Template.bind({});
LanguageButtons.args = {
  title: 'Select language',
  buttons: ['Wikipedia', 'Store Norske Leksikon'],
  startIcon: <WikipediaIcon />,
  value: 'Wikipedia',
  buttonWithIcon: 'Wikipedia',
  onClick: () => console.log('All topics'),
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
