import React from 'react';
import { ToggleButton as MUIToggleButton } from '@mui/material';
import { Grid } from '@mui/material';
import { withStyles } from '@mui/styles';

export interface ToggleButtonProps {
  handleChange: () => void;
  selected: boolean;
  children: React.ReactChild;
  value: string;
}

const CustomToggleButton = withStyles({
  root: {
    padding: 0,
    paddingBottom: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: 120,
    height: 75,
    '& .MuiTypography-root': {
      fontFamily: 'DM Mono',
    },
  },
})(MUIToggleButton);

const ToggleButton = (props: ToggleButtonProps) => {
  const { selected, handleChange, children, value } = props;
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <CustomToggleButton
        value={value}
        selected={selected}
        onChange={handleChange}
      >
        {children}
      </CustomToggleButton>
    </Grid>
  );
};

export default ToggleButton;
