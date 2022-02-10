import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DisplayLink, DisplayLinkProps } from './DisplayLink';

const meta: Meta = {
  title: 'DisplayLink',
  component: DisplayLink,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<DisplayLinkProps> = (args) => <DisplayLink {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  link: 'https://www.google.com/search?q=test',
  displayLink: 'google.com',
};

export const NoLink = Template.bind({});
NoLink.args = { displayLink: 'google.com' };

export const NoDisplayLink = Template.bind({});
NoDisplayLink.args = { link: 'https://www.google.com/search?q=test' };
