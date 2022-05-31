import React, { ChangeEvent } from 'react';
import { Grid, TextField, Paper, Button } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import { makeStyles } from '@mui/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import EmailField from '../EmailField';
import PasswordField from '../PasswordField';
import FormWrapper from '../FormWrapper';
import Typography from '../Typography';

const useStyles = makeStyles(() =>
  createStyles({
    successMessageCheck: {
      height: '50%',
      background: '#f8c608',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    closeButton: {
      background: '#f8c608',
      color: 'black',
      textTransform: 'none',
    },
  })
);

export interface SignupProps {
  initialValues: {
    name: string;
    email: string;
    password: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaSignup: Yup.ObjectSchema<any>;
  handleSignup: (formValue: {
    name: string;
    email: string;
    password: string;
  }) => void;
  loading: boolean;
  message: string;
  signedInMessage?: boolean;
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
        fullWidth
        variant={'filled'}
        id="name"
        name="name"
        label="Name"
        value={actions.values.name}
        onChange={actions.handleChange}
        error={actions.touched.name && Boolean(actions.errors.name)}
        helperText={actions.touched.name && actions.errors.name}
      />
    </Grid>
  );
};

const Signup = (props: SignupProps) => {
  const classes = useStyles();
  const {
    handleSignup,
    initialValues,
    schemaSignup,
    message,
    loading,
    signedInMessage = false,
  } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaSignup,
    onSubmit: handleSignup,
  });

  return (
    <div>
      {signedInMessage ? (
        <Paper elevation={4}>
          <Grid>
            <Grid
              container
              item
              justifyContent="center"
              className={classes.successMessageCheck}
              p={4}
            >
              <i className="ph-check-circle ph-7x"></i>
            </Grid>
            <Grid p={4}>
              <Grid container justifyContent="center" pb={1}>
                <Typography variant="h4">Success!</Typography>
              </Grid>
              <Grid container justifyContent="center">
                <Typography variant="h6">
                  Please check your email for the confirmation message we have
                  just sent you
                </Typography>
              </Grid>
              <Grid container justifyContent="center" pt={3}>
                <Button
                  variant="contained"
                  disableElevation
                  size="large"
                  className={classes.closeButton}
                >
                  <Typography variant="body1">Close</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
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
      )}
    </div>
  );
};

export default Signup;
