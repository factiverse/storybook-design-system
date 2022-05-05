import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
import Button from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Editor = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Editor.args = {
  logo: 'https://editor.factiverse.no/79b028bc000a5e47c9a7.png',
  login: <Button label="SIGN IN" />,
  signup: <Button label="SIGN UP FOR FREE" />,
  disclaimer: <Button label="ALPHA V0.1" />,
  appBarColor: 'default',
  disclaimerStart: true,
  logoWidth: '200',
  logoHeight: '58',
  mobileLogoWidth: '130',
  mobileLogoHeight: '35',
};

export const Topics = Template.bind({});
Topics.args = {
  logo: 'https://topics.factiverse.no/657cfe7fc0482dcc08b9.png',
  appBarColor: 'inherit',
  disclaimerEnd: true,
  disclaimer: <Button label="ALPHA V0.1" />,
  logoWidth: '221',
  logoHeight: '72',
  mobileLogoWidth: '160',
  mobileLogoHeight: '45',
};
