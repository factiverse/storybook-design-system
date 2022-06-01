import React, { ChangeEvent } from 'react';
import { Grid } from '@mui/material';
import TextField from '../TextField';

export interface EmailFieldProps {
  actions: {
    values: { email: string };
    handleChange: (e: string | ChangeEvent<unknown>) => void;
    touched: { email?: boolean };
    errors: { email?: string };
  };
}

export const defaultEmailActions = {
  values: { email: 'emailValue' },
  handleChange: () => console.log('handleChange'),
  touched: { email: true },
  errors: { email: 'emailError' },
};

const EmailField = ({ actions = defaultEmailActions }: EmailFieldProps) => {
  return (
    <Grid item mt={-1}>
      <TextField
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
