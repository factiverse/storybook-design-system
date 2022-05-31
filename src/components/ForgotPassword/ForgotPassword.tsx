import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import EmailField from '../EmailField';
import FormWrapper from '../FormWrapper/FormWrapper';

export interface ForgotPasswordProps {
  initialValues: { email: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaForgotPass: Yup.ObjectSchema<any>;
  handleForgotPassword: (formValue: { email: string }) => void;
  loading: boolean;
  message?: string;
}

const ForgotPassword = (props: ForgotPasswordProps) => {
  const {
    initialValues,
    schemaForgotPass,
    handleForgotPassword,
    message,
    loading,
  } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaForgotPass,
    onSubmit: handleForgotPassword,
  });

  return (
    <FormWrapper
      message={message}
      formName="Forgot Password?"
      handleSubmit={formik.handleSubmit}
      loading={loading}
      formSubtitle="Please enter email address associated with your account"
      submitName="Send"
    >
      <EmailField actions={formik} />
    </FormWrapper>
  );
};

export default ForgotPassword;
