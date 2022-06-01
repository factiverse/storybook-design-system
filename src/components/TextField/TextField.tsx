import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField = ({
  sx,
  placeholder,
  id = 'outlined-basic',
  label = 'Headline',
  variant = 'outlined',
  disabled = false,
  color = 'primary',
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
      {...props}
    />
  );
};

export default TextField;
