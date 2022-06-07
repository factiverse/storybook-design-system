import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import EmailField from '../EmailField';
import FormWrapper from '../FormWrapper';
import PasswordField from '../PasswordField';

export interface LoginProps {
  initialValues: { email: string; password: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaLogin: Yup.ObjectSchema<any>;
  handleLogin: (formValue: { email: string; password: string }) => void;
  loading: boolean;
  message?: string;
}

const Login = (props: LoginProps) => {
  const { message, loading, initialValues, schemaLogin, handleLogin } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaLogin,
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
        <EmailField actions={formik} />
        <PasswordField actions={formik} />
      </>
    </FormWrapper>
  );
};

export default Login;
