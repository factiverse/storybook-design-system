import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField = ({ ...props }: TextFieldProps) => {
  const { variant = 'outlined' } = props;
  return <TextFieldMUI fullWidth variant={variant} {...props} />;
};

export default TextField;
