import { Grid } from '@mui/material';
import React from 'react';
import EmailField from '../EmailField';
import PasswordField from '../PasswordField';
import TextField from '../TextField';
import FormWrapper from '../FormWrapper';

export interface SignupProps {
  handleSubmit: () => void;
  loading: boolean;
  message?: string;
}

const Signup = (props: SignupProps) => {
  const { handleSubmit, message, loading } = props;

  const emailFieldActions = {
    values: { email: 'something' },
    handleChange: () => console.log('handleChange'),
    touched: { email: '' },
    errors: { email: '' },
  };

  const passwordFieldActions = {
    values: { password: 'something' },
    handleChange: () => console.log('handleChange'),
    touched: { password: '' },
    errors: { password: '' },
  };

  return (
    <FormWrapper
      handleSubmit={handleSubmit}
      loading={loading}
      message={message}
      formName="Sign Up"
    >
      <>
        <EmailField actions={emailFieldActions} />
        <Grid item>
          <TextField label="Name" />
        </Grid>
        <PasswordField actions={passwordFieldActions} />
      </>
    </FormWrapper>
  );
};

export default Signup;
