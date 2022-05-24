import React from 'react';
import { Grid, TextField } from '@mui/material';

export interface PasswordFieldProps {
  actions: {
    values: { password: string };
    handleChange: () => void;
    touched: { password: string };
    errors: { password: string };
  };
}

const PasswordField = ({ actions }: PasswordFieldProps) => {
  return (
    <Grid item>
      <TextField
        fullWidth
        variant={'filled'}
        id="password"
        name="password"
        label="Password"
        type="password"
        value={actions.values.password}
        onChange={actions.handleChange}
        error={
          /* actions.touched.password  && */ Boolean(actions.errors.password)
        }
        helperText={actions.touched.password && actions.errors.password}
      />
    </Grid>
  );
};

export default PasswordField;
