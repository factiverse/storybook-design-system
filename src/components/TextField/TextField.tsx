import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

const TextField = ({
  label,
  variant = 'standard',
  hiddenLabel = false,
  margin = 'none',
}: TextFieldProps) => {
  return (
    <TextFieldMUI
      label={label}
      variant={variant}
      hiddenLabel={hiddenLabel}
      margin={margin}
    />
  );
};

export default TextField;
