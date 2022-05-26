import React from 'react';
import EmailField from '../EmailField';
import FormWrapper from '../FormWrapper';
import PasswordField from '../PasswordField';

export interface LoginProps {
  handleSubmit: () => void;
  loading: boolean;
  message?: string;
}

const Login = (props: LoginProps) => {
  const { handleSubmit, message, loading } = props;

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

  return (
    <FormWrapper
      handleSubmit={handleSubmit}
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
