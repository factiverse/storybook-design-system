import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

const Version = ({
  color = 'default',
  disabled = false,
  title = 'v1',
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
