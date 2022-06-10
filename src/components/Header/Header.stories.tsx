import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import Logo from '../../img/Logo.png';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  withLoginAndSignup: false,
  logo: Logo,
  appBarColor: 'inherit',
  disclaimerEnd: true,
  disclaimerStart: false,
  diclaimerClick: () => console.log('Disclaimer Click'),
};

export const WithLoginButtons = Template.bind({});
WithLoginButtons.args = {
  logo: Logo,
  disclaimerStart: true,
  appBarColor: 'default',
  withLoginAndSignup: true,
  diclaimerClick: () => console.log('Disclaimer Click'),
  signInClick: () => console.log('sign in'),
  signUpClick: () => console.log('sign up'),
};
