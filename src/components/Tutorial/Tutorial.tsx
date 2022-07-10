import React from 'react';
import { Grid } from '@mui/material';
import Typography from '../Typography';

export interface TutorialProps {
  heading: string;
}

const Tutorial = (props: TutorialProps) => {
  const { heading } = props;

  return (
    <Grid style={{ height: 300, width: 300, background: '#FCFCFC' }}>
      <Typography variant="h5">{heading}</Typography>
    </Grid>
  );
};

export default Tutorial;
