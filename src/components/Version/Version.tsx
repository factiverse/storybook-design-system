import React from 'react';
import { version } from '../../../package.json';
import { IconButton, IconButtonProps } from '@mui/material';

const Version = ({
  color = 'default',
  disabled = false,
  title = version,
}: IconButtonProps) => {
  return (
    <>
      <IconButton color={color} disabled={disabled}>
        v{title}
      </IconButton>
    </>
  );
};

export default Version;
