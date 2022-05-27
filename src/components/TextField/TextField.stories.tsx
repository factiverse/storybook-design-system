import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';
import { Grid } from '@mui/material';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: {
        options: ['outlined', 'filled', 'standard'],
        type: 'radio',
      },
    },
    margin: {
      control: {
        options: ['none', 'dense', 'normal'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  variant: 'filled',
};

export const Variants: ComponentStory<typeof TextField> = () => (
  <>
    <TextField variant="standard" label="standard" />
    <TextField variant="outlined" label="outlined" />
    <TextField variant="filled" label="filled" />
  </>
);

export const HiddenLabel = Template.bind({});
HiddenLabel.args = {
  variant: 'outlined',
  hiddenLabel: true,
};

export const Margin: ComponentStory<typeof TextField> = () => (
  <Grid container flexDirection="column">
    <TextField variant="outlined" label="outlined" margin="none" />
    <TextField variant="outlined" label="outlined" margin="dense" />
    <TextField variant="outlined" label="outlined" margin="normal" />
  </Grid>
);
