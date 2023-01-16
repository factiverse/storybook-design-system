import React from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';

/**
 * Wrapper for [MUI Button](https://mui.com/material-ui/react-button/).
 *
 * @return {JSX.Element}
 */
export const Button = ({ ...props }: ButtonProps) => {
  const { variant = 'contained' } = props;
  return <ButtonMUI disableRipple variant={variant} {...props} />;
};

export default Button;
