import { Box, Button, Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '../Typography';

export interface FormWrapperProps {
  handleSubmit: () => void;
  children: React.ReactChild;
  formName: string;
  loading: boolean;
  message?: string;
  formSubtitle?: string;
  submitButtonLabel?: string;
}

const FormWrapper = (props: FormWrapperProps) => {
  const {
    handleSubmit,
    message,
    loading,
    children,
    formName,
    formSubtitle,
    submitButtonLabel = 'Submit',
  } = props;

  return (
    <Paper elevation={4} className={'Popup'}>
      <form onSubmit={handleSubmit}>
        <Box p={4}>
          <Grid container direction={'column'} spacing={3}>
            <Grid item>
              <Typography variant="h5">{formName}</Typography>
            </Grid>
            {formSubtitle && (
              <Grid item mt={-2}>
                <Typography variant="subtitle1">{formSubtitle}</Typography>
              </Grid>
            )}
            {children}
            <Grid item>
              <Typography>{message}</Typography>
            </Grid>
            <Grid item container justifyContent={'flex-end'}>
              <Button
                variant={'contained'}
                color={'secondary'}
                type="submit"
                disabled={loading}
              >
                {submitButtonLabel}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Paper>
  );
};

export default FormWrapper;
