import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

export const TextField = ({ ...props }: TextFieldProps) => {
  const { variant = 'outlined' } = props;
  return (
    <TextFieldMUI
      fullWidth
      sx={{
        '& .MuiInputLabel-root.Mui-focused': { color: 'rgba(0, 0, 0, 0.65)' },
        '& .MuiOutlinedInput-root.Mui-focused': {
          '& > fieldset': { borderColor: '#FFE275' },
        },
      }}
      variant={variant}
      {...props}
    />
  );
};

export default TextField;
