import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleButton from './ToggleButton';
import { Grid } from '@mui/material';
import SupportIcon from '../SupportIcon';
import Typography from '../Typography';
import GoogleIcon from '../../img/GoogleLogo.svg';

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    children: {
      control: {
        type: 'children',
      },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const SupportIconToggle = Template.bind({});
SupportIconToggle.args = {
  handleChange: () => console.log('handleChange'),
  selected: true,
  children: (
    <SupportIcon variant="disputing" value={30} label="Disputing" count={5} />
  ),
};

export const IconToggle = Template.bind({});
IconToggle.args = {
  handleChange: () => console.log('handleChange'),
  selected: false,
  children: (
    <Grid container direction="column" alignItems="center" pt={1}>
      <Grid item>
        <img src={GoogleIcon} alt="Google" width="38px" height="38px" />
      </Grid>
      <Grid item>
        <Typography variant="body2" color="black">
          Google
        </Typography>
      </Grid>
    </Grid>
  ),
};
