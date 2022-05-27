import React from 'react';
import EmailField from '../EmailField';
import FormWrapper from '../FormWrapper/FormWrapper';

export interface ForgotPasswordProps {
  handleSubmit: () => void;
  loading: boolean;
  message?: string;
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const { handleSubmit, message, loading } = props;

  const emailFieldActions = {
    values: { email: 'something' },
    handleChange: () => console.log('handleChange'),
    touched: { email: '' },
    errors: { email: '' },
  };

  return (
    <FormWrapper
      message={message}
      formName="Forgot Password?"
      handleSubmit={handleSubmit}
      loading={loading}
      formSubtitle="Please enter email address associated with your account"
    >
      <EmailField actions={emailFieldActions} />
    </FormWrapper>
  );
};

export default ForgotPassword;
