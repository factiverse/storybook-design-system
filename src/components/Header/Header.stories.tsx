import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import EditorLogo from '../../img/editorLogo.png';
import TopicsLogo from '../../img/topicsLogo.png';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Editor = Template.bind({});
Editor.args = {
  logo: EditorLogo,
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
  logo: TopicsLogo,
  appBarColor: 'inherit',
  disclaimerEnd: true,
  disclaimerStart: false,
  logoWidth: '221',
  logoHeight: '72',
  mobileLogoWidth: '160',
  mobileLogoHeight: '50',
  diclaimerClick: () => console.log('Disclaimer Click'),
};
