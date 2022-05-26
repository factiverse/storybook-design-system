import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormWrapper from './FormWrapper';
import TextField from '../TextField';
import { Grid } from '@mui/material';

export default {
  title: 'Components/FormWrapper',
  component: FormWrapper,
} as ComponentMeta<typeof FormWrapper>;

const Template: ComponentStory<typeof FormWrapper> = (args) => (
  <FormWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleSubmit: () => console.log('submit'),
  message: '',
  loading: false,
  formName: 'Login',
  children: (
    <Grid item>
      <TextField label="name" />
    </Grid>
  ),
};
