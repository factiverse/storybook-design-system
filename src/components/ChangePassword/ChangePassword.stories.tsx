import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as Yup from 'yup';
import ChangePassword from './ChangePassword';

const schemaChangePass = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password should be of minimum 8 characters length'),
  passwordConfirmation: Yup.string()
    .required('Confirm password is required')
    .min(8, 'Password should be of minimum 8 characters length')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export default {
  title: 'Components/ChangePassword',
  component: ChangePassword,
} as ComponentMeta<typeof ChangePassword>;

const Template: ComponentStory<typeof ChangePassword> = (args) => (
  <ChangePassword {...args} />
);

export const Default = Template.bind({});
Default.args = {
  initialValues: { password: '', passwordConfirmation: '' },
  handleChangePass: () => alert('password was changed'),
  schemaChangePass: schemaChangePass,
  message: '',
  loading: false,
};
