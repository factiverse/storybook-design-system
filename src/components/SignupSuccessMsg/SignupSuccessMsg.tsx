import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import { makeStyles } from '@mui/styles';
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
      '&:hover': {
        background: '#FFE275',
      },
    },
  })
);

export interface SignupSuccessMsgProps {
  withCloseButton?: boolean;
}

const SignupSuccessMsg = ({
  withCloseButton = true,
}: SignupSuccessMsgProps) => {
  const classes = useStyles();
  return (
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
              Please check your email for the confirmation message we have just
              sent you
            </Typography>
          </Grid>
          {withCloseButton && (
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
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignupSuccessMsg;
