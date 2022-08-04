import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tooltip from './Tooltip';
import { Grid } from '@mui/material';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: {
        type: 'children',
      },
    },
    placement: {
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Grid container sx={{ height: 'auto', width: '80px' }}>
      <div>I am tooltip</div>
    </Grid>
  ),
  title: 'I am tooltip',
};
Default.parameters = {
  layout: 'centered',
};
