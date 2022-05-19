import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer, { footerText } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  year: '2022',
  text: footerText,
};

export const DifferentYear = Template.bind({});
DifferentYear.args = {
  year: '2020',
  text: footerText,
};
