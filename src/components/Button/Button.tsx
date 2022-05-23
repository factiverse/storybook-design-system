import React from 'react';
import './Button.scss';
import { Button as MuiButton } from '@mui/material';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <MuiButton variant="contained" onClick={props.onClick} color="primary">
      {props.label}
    </MuiButton>
  );
};

export default Button;
