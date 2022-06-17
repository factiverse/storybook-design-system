import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SupportIcon from './SupportIcon';
import { Grid } from '@mui/material';

export default {
  title: 'Components/SupportIcon',
  component: SupportIcon,
} as ComponentMeta<typeof SupportIcon>;

const Template: ComponentStory<typeof SupportIcon> = (args) => (
  <SupportIcon {...args} />
);

export const Supporting = Template.bind({});
Supporting.args = {
  variant: 'supporting',
  value: 30,
  label: 'Supporting',
  count: 4,
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  value: 30,
  label: 'Neutral',
  count: 4,
};

export const Disputing = Template.bind({});
Disputing.args = {
  variant: 'disputing',
  value: 30,
  label: 'Disputing',
  count: 4,
};

export const AllVariants: ComponentStory<typeof SupportIcon> = () => (
  <Grid container xs={12} justifyContent="space-around">
    <Grid item xs={4}>
      <SupportIcon
        label="Supporting"
        variant="supporting"
        value={30}
        count={4}
      />
    </Grid>
    <Grid item xs={4}>
      <SupportIcon label="Neutral" variant="neutral" value={60} count={8} />
    </Grid>
    <Grid item xs={4}>
      <SupportIcon label="Disputing" variant="disputing" value={15} count={2} />
    </Grid>
  </Grid>
);
