import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField = ({
  sx,
  placeholder,
  id = 'outlined-basic',
  label = '',
  variant = 'outlined',
  disabled = false,
  color = 'primary',
  error = false,
  helperText = '',
  ...props
}: TextFieldProps) => {
  return (
    <TextFieldMUI
      fullWidth
      sx={sx}
      label={label}
      variant={variant}
      id={id}
      disabled={disabled}
      color={color}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      {...props}
    />
  );
};

export default TextField;
