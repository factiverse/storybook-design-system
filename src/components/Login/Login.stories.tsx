import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Yup from 'yup';
import Login from './Login';

const schemaLogin = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .email('Must be a valid email.'),
  password: Yup.string().required('Password is required.'),
});

export default {
  title: 'Components/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: { email: '', password: '' },
  handleLogin: () => alert('you are logged in'),
  schemaLogin: schemaLogin,
  message: '',
  loading: false,
};
