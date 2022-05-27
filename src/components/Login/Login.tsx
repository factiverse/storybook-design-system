import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';
import EmailField from '../EmailField';
import FormWrapper from '../FormWrapper';
import PasswordField from '../PasswordField';

export interface LoginProps {
  handleSubmit: () => void;
  initialValues: { email: string; password: string };
  // schemaLogin: Yup.ObjectSchema<unknown>;
  handleLogin: (formValue: { email: string; password: string }) => void;
  loading: boolean;
  message?: string;
}

const Login = (props: LoginProps) => {
  const {
    // handleSubmit,
    message,
    loading,
    initialValues,
    // schemaLogin,
    handleLogin,
  } = props;

  const emailFieldActions = {
    values: { email: 'something' },
    handleChange: () => console.log('handleChange'),
    touched: { email: '' },
    errors: { email: '' },
  };

  const passwordFieldActions = {
    values: { password: 'dsnkjn' },
    handleChange: () => console.log('handleChange'),
    touched: { password: '' },
    errors: { password: '' },
  };

  const formik = useFormik({
    initialValues: initialValues,
    // validationSchema: schemaLogin,
    onSubmit: handleLogin,
  });

  return (
    <FormWrapper
      handleSubmit={formik.handleSubmit}
      message={message}
      formName="Login"
      loading={loading}
    >
      <>
        <EmailField actions={emailFieldActions} />
        <PasswordField actions={passwordFieldActions} />
      </>
    </FormWrapper>
  );
};

export default Login;
