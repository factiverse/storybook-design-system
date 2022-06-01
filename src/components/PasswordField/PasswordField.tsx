import React, { ChangeEvent, useState } from 'react';
import { Grid, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Warning from '@mui/icons-material/Warning';
import TextField from '../TextField';

export interface PasswordFieldProps {
  actions: {
    values: { password: string; passwordConfirmation?: string };
    handleChange: (e: string | ChangeEvent<unknown>) => void;
    touched: { password?: boolean; passwordConfirmation?: boolean };
    errors: { password?: string; passwordConfirmation?: string };
  };
  isConfirmPassword?: boolean;
}

export const defaultPasswordActions = {
  values: { password: 'passwordValue' },
  handleChange: () => console.log('handleChange'),
  touched: { password: true },
  errors: { password: 'passwordError' },
};

const PasswordField = ({
  actions = defaultPasswordActions,
  isConfirmPassword = false,
}: PasswordFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isCapsEnabled, setIsCapsEnabled] = useState<boolean>(false);

  const onKeyDown = (event: { keyCode: number }): void => {
    if (event.keyCode === 20 && isCapsEnabled !== null) {
      setIsCapsEnabled(!isCapsEnabled);
    }
  };

  const passwordValues = isConfirmPassword
    ? {
        id: 'passwordConfirmation',
        label: 'Confirm new password',
        value: actions.values.passwordConfirmation,
        error:
          actions.touched.passwordConfirmation &&
          Boolean(actions.errors.passwordConfirmation),
        helptext:
          actions.touched.passwordConfirmation &&
          actions.errors.passwordConfirmation,
      }
    : {
        id: 'password',
        label: 'Password',
        value: actions?.values.password,
        error: actions.touched.password && Boolean(actions.errors.password),
        helptext: actions.touched.password && actions.errors.password,
      };

  return (
    <Grid item mt={-1}>
      <TextField
        id={passwordValues.id}
        label={passwordValues.label}
        type={showPassword ? 'text' : 'password'}
        value={passwordValues.value}
        onChange={actions.handleChange}
        onKeyDown={onKeyDown}
        error={passwordValues.error}
        helperText={passwordValues.helptext}
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
