import React from 'react';
import { version } from '../../../package.json';
import { IconButton, IconButtonProps } from '@mui/material';

const Version = ({
  color = 'primary',
  disabled = false,
  title = version,
}: IconButtonProps) => {
  return (
    <>
      <IconButton color={color} disabled={disabled}>
        {title}
      </IconButton>
    </>
  );
};

export default Version;
