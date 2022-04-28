import React from 'react';
import { Card } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import { useMediaQuery } from '@mui/material';

export interface ClaimWithCheckboxProps {
  label: string;
}

const ClaimWithCheckbox = (props: ClaimWithCheckboxProps) => {
  const { label } = props;
  // const theme = useTheme();
  // const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  return <Card>{label}</Card>;
};

export default ClaimWithCheckbox;
