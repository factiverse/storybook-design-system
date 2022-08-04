import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({ ...props }: ButtonProps) => {
  const { variant = 'contained' } = props;
  return (
    <ButtonMUI
      disableRipple
      sx={{ borderRadius: '8px' }}
      variant={variant}
      {...props}
    />
  );
};

export default Button;
