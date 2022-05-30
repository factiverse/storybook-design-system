import { Grid, Paper, Button } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import EmailField from '../EmailField';
import PasswordField from '../PasswordField';
import TextField from '../TextField';
import FormWrapper from '../FormWrapper';
import { CheckCircle } from 'phosphor-react';
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
  handleSubmit: () => void;
  loading: boolean;
  message?: string;
  signedInMessage?: boolean;
}

const Signup = (props: SignupProps) => {
  const classes = useStyles();
  const { handleSubmit, message, loading, signedInMessage = false } = props;

  const emailFieldActions = {
    values: { email: 'something@something.com' },
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
              <CheckCircle size={110} />
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
      )}
    </div>
  );
};

export default Signup;
