import React, { ChangeEvent } from 'react';
import { Grid, TextField } from '@mui/material';

interface EmailFieldProps {
  actions: {
    values: { email: string };
    handleChange: (e: string | ChangeEvent<unknown>) => void;
    touched: { email?: boolean };
    errors: { email?: string };
  };
}

const EmailField = ({ actions }: EmailFieldProps) => {
  return (
    <Grid item mt={-1}>
      <TextField
        fullWidth
        variant={'filled'}
        id="email"
        name="email"
        label="Email"
        value={actions.values.email}
        onChange={actions.handleChange}
        error={actions.touched.email && Boolean(actions.errors.email)}
        helperText={actions.touched.email && actions.errors.email}
      />
    </Grid>
  );
};

export default EmailField;
