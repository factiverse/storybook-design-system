import React from 'react';
import useState from 'storybook-addon-state';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ButtonGroup from './ButtonGroup';
import WikipediaIcon from '../../icons/WikipediaIcon';

import { useArgs } from '@storybook/client-api';

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

export const WithState = () => {
  const [value, setValue] = useState('click', 'Ukraine');
  return (
    <ButtonGroup
      buttons={['All Topics', 'Ukraine', 'COVID-19']}
      value={value}
      onClick={setValue}
    />
  );
};

export const WithArgsState = () => {
  const [{ value }, updateArgs] = useArgs();
  const handleClick = (newValue: string) => updateArgs({ value: newValue });

  return (
    <ButtonGroup
      buttons={['All Topics', 'Ukraine', 'COVID-19']}
      value={value}
      onClick={handleClick}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  buttons: ['All Topics', 'Ukraine', 'COVID-19'],
  value: 'All Topics',
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
