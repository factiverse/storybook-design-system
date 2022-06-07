import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Yup from 'yup';
import Signup from './Signup';
import { linkTo } from '@storybook/addon-links';

const schemaSignup = Yup.object().shape({
  name: Yup.string().required('Name is required.'),
  email: Yup.string()
    .required('Email is required.')
    .email('Must be a valid email.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password should be of minimum 8 characters length'),
});

export default {
  title: 'Components/Signup',
  component: Signup,
} as ComponentMeta<typeof Signup>;

const Template: ComponentStory<typeof Signup> = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: { email: '', name: '', password: '' },
  handleSignup: linkTo('Components/SignupSuccessMsg', 'message'),
  schemaSignup: schemaSignup,
  message: '',
  loading: false,
};
