import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({ variant, color, disabled, ...props }: ButtonProps) => {
  return (
    <ButtonMUI
      variant={variant}
      color={color}
      disabled={disabled}
      sx={{ borderRadius: '8px' }}
      {...props}
    />
  );
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
