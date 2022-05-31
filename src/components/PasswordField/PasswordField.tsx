import React, { ChangeEvent, useState } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Warning from '@mui/icons-material/Warning';

export interface PasswordFieldProps {
  actions: {
    values: { password: string };
    handleChange: (e: string | ChangeEvent<unknown>) => void;
    touched: { password?: boolean };
    errors: { password?: string };
  };
}

const PasswordField = ({ actions }: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isCapsEnabled, setIsCapsEnabled] = useState<boolean>(false);

  const onKeyDown = (event: { keyCode: number }): void => {
    if (event.keyCode === 20 && isCapsEnabled !== null) {
      setIsCapsEnabled(!isCapsEnabled);
    }
  };

  return (
    <Grid item mt={-1}>
      <TextField
        fullWidth
        variant={'filled'}
        id="password"
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={actions.values.password}
        onChange={actions.handleChange}
        onKeyDown={onKeyDown}
        error={actions.touched.password && Boolean(actions.errors.password)}
        helperText={actions.touched.password && actions.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isCapsEnabled && (
                <Warning color="error" titleAccess="Caps Lock is enabled" />
              )}
              <IconButton
                aria-label="Toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default PasswordField;
