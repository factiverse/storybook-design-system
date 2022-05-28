/** @jsx jsx */
import React from 'react';
import './Button.scss';
import { Button as MuiButton } from '@mui/material';
import { css, jsx } from '@emotion/react';

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      variant="contained"
      onClick={props.onClick}
      color="primary"
      css={css`
        background-color: 'hotpink';
        width: '500px';
      `}
    >
      {props.label}
    </MuiButton>
  );
};

export default Button;
