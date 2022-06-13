import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({
  variant,
  size,
  color,
  disabled,
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

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  disabled: false,
};

export default Button;
