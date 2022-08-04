import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

export const Button = ({ ...props }: ButtonProps) => {
  return <ButtonMUI disableRipple sx={{ borderRadius: '8px' }} {...props} />;
};

Button.defaultProps = {
  variant: 'contained',
};

export default Button;
