import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({ ...props }: ButtonProps) => {
  const { variant = 'contained' } = props;
  return <ButtonMUI disableRipple variant={variant} {...props} />;
};

export default Button;
