import React from 'react';
import { Grid, TextField } from '@mui/material';

interface EmailFieldProps {
  actions: {
    values: { email: string };
    handleChange: () => void;
    touched: { email: string };
    errors: { email: string };
  };
}

const EmailField = ({ actions }: EmailFieldProps) => {
  return (
    <Grid item>
      <TextField
        fullWidth
        variant={'filled'}
        id="email"
        name="email"
        label="Email"
        value={actions.values.email}
        onChange={actions.handleChange}
        error={/* actions.touched.email && */ Boolean(actions.errors.email)}
        helperText={actions.touched.email && actions.errors.email}
      />
    </Grid>
  );
};

export default EmailField;
