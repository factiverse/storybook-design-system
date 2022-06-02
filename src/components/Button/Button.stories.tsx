import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world!',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me!',
};

// Example for @storybook/addon-links: link from one component to another
export const first = () => (
  <button onClick={linkTo('Components/Button', 'second')}>Go to Second</button>
);
export const second = () => (
  <button onClick={linkTo('Components/Button', 'first')}>Go to First</button>
);
