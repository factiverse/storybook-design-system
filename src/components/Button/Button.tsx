import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({
  variant = 'contained',
  size = 'medium',
  color = 'primary',
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <ButtonMUI
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      {...props}
    />
  );
};

export default Button;
