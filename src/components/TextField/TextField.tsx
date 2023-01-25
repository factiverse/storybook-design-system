import React from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';

/**
 * Wrapper for [Material UI TextField](https://mui.com/material-ui/react-text-field/).
 *
 * @return {JSX.Element}
 */
export const TextField = ({ ...props }: TextFieldProps) => {
  const { variant = 'outlined' } = props;
  return <TextFieldMUI fullWidth variant={variant} {...props} />;
};

export default TextField;
