import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Yup from 'yup';
import ForgotPassword from './ForgotPassword';

const schemaForgotPass = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .email('Must be a valid email.'),
});

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
} as ComponentMeta<typeof ForgotPassword>;

const Template: ComponentStory<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialValues: { email: '' },
  handleForgotPassword: () => alert('email sent'),
  schemaForgotPass: schemaForgotPass,
  message: '',
  loading: false,
};
