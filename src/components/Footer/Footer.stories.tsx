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

export const DifferentYearAndText = Template.bind({});
DifferentYearAndText.args = {
  year: '2020',
  text: 'We are continuously developing our patented AI for different use cases and would love to hear from you.',
};
