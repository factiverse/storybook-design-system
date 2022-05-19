import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Editor = Template.bind({});
Editor.args = {
  logo: 'https://editor.factiverse.no/79b028bc000a5e47c9a7.png',
  disclaimerStart: true,
  appBarColor: 'default',
  logoWidth: '200',
  logoHeight: '58',
  mobileLogoWidth: '130',
  mobileLogoHeight: '40',
  withLoginAndSignup: true,
  diclaimerClick: () => console.log('Disclaimer Click'),
};

export const Topics = Template.bind({});
Topics.args = {
  withLoginAndSignup: false,
  logo: 'https://topics.factiverse.no/657cfe7fc0482dcc08b9.png',
  appBarColor: 'inherit',
  disclaimerEnd: true,
  disclaimerStart: false,
  logoWidth: '221',
  logoHeight: '72',
  mobileLogoWidth: '160',
  mobileLogoHeight: '50',
  diclaimerClick: () => console.log('Disclaimer Click'),
};
