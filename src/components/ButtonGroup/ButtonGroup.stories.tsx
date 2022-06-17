import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
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
  startIcon: <i className="ph-facebook-logo"></i>,
  value: 'Wikipedia',
  onClick: () => console.log('All topics'),
};
