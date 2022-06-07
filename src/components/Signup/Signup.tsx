import React, { ChangeEvent } from 'react';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import EmailField from '../EmailField';
import PasswordField from '../PasswordField';
import FormWrapper from '../FormWrapper';
import TextField from '../TextField';

export interface SignupProps {
  initialValues: {
    name: string;
    email: string;
    password: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaSignup?: Yup.ObjectSchema<any>;
  handleSignup: (formValue: {
    name: string;
    email: string;
    password: string;
  }) => void;
  loading: boolean;
  message: string;
}

interface NameFieldProps {
  actions: {
    values: { name: string };
    handleChange: (e: string | ChangeEvent<unknown>) => void;
    touched: { name?: boolean };
    errors: { name?: string };
  };
}

const NameField = (props: NameFieldProps) => {
  const { actions } = props;
  return (
    <Grid item mt={-1}>
      <TextField
        id="name"
        label="Name"
        value={actions?.values?.name}
        onChange={actions.handleChange}
        error={actions.touched.name && Boolean(actions.errors.name)}
        helperText={actions.touched.name && actions.errors.name}
      />
    </Grid>
  );
};

const Signup = (props: SignupProps) => {
  const { handleSignup, initialValues, schemaSignup, message, loading } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaSignup,
    onSubmit: handleSignup,
  });

  return (
    <FormWrapper
      handleSubmit={formik.handleSubmit}
      loading={loading}
      message={message}
      formName="Sign Up"
    >
      <>
        <EmailField actions={formik} />
        <NameField actions={formik} />
        <PasswordField actions={formik} />
      </>
    </FormWrapper>
  );
};

export default Signup;
