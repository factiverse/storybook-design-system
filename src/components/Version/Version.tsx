import React from 'react';

import { IconButton, IconButtonProps } from '@mui/material';

const Version = ({
  color = 'default',
  disabled = false,
  title = '1.0',
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
