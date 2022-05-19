import React from 'react';
import { Button } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story = ({ ...args }) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  color: 'error',
};

export const Info = Template.bind({});
Info.args = {
  children: 'Information',
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'warning',
  color: 'warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'disabled',
  disabled: true,
};

export const Sizes = () => {
  return (
    <>
      <Button style={{ marginRight: '1' + 'em' }} size="large">
        Large
      </Button>
      <Button style={{ marginRight: '1' + 'em' }} size="medium">
        medium
      </Button>
      <Button style={{ marginRight: '1' + 'em' }} size="small">
        Small
      </Button>
    </>
  );
};
