import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from './Button';
import PropTypes from 'prop-types';
import { ButtonProps } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story= (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  //  size: PropTypes.oneOf(["small", "medium", "large"]),
  size:"small",
  color:"blue",
  value:"Primary"
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  size:"medium",
  color:"teal",
  value:"Secondary"
};

export const Success = Template.bind({});
Success.args = {
  size:"medium",
  color:"green",
  
  value:"Success"
};

export const Error = Template.bind({});
Error.args = {
  size:"medium",
  color:"red",
  variant:"contained",
  value:"Error"
};

export const Info = Template.bind({});
Info.args = {
  size:"medium",
  color:"green",
  variant:"contained",
  value:"Information"
};

export const Warning = Template.bind({});
Warning.args = {
  size:"medium",
  color:"orange",
  variant:"contained",
  value:"Warning"
};

export const Disabled = Template.bind({});
Disabled.args = {
  size:"medium",
  color:"grey",
  variant:"contained",
  value:"Disabled",
  disabled:true
}

export const Sizes = () => {
  return (
    <>
      <div>
        <Button value="test">Large</Button>
        <Button >medium</Button>
        <Button >Small</Button>
      </div>
      <div>
        <Button >Large</Button>
        <Button >medium</Button>
        <Button >Small</Button>
      </div>
      <div>
        <Button >Large</Button>
        <Button >medium</Button>
        <Button >Small</Button>
      </div>
      <div>
        <Button >Large</Button>
        <Button >medium</Button>
        <Button >Small</Button>
      </div>
      <div>
        <Button disabled >Large</Button>
        <Button disabled >medium</Button>
        <Button disabled >Small</Button>
      </div>
    </>
  );
};