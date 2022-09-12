import { LinearProgress, Box, Grid } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';
import Typography from '../Typography';

export interface SupportIconProps {
  variant: string; // supporting or disputing
  value: number; // between 0 and 100
  count: number;
  label: string;
}

const BorderLinearProgress = withStyles({
  root: {
    height: 40,
    width: 118,
  },
})(LinearProgress);

const SupportIcon: React.FC<SupportIconProps> = ({
  value,
  variant,
  label,
  count,
}) => {
  const linearProgressColor = () => {
    switch (variant) {
      case 'supporting':
        return 'success';
      case 'disputing':
        return 'error';
      case 'neutral':
        return 'warning';
    }
  };

  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      <Grid item>
        <Typography
          align="center"
          variant="body2"
          color="black"
          fontFamily="DM Mono"
        >
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <Box position="relative" display="inline-flex">
          <BorderLinearProgress
            data-testid="linearProgressBar"
            color={linearProgressColor()}
            variant="determinate"
            value={value}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" fontFamily="DM Mono" color="black">
              {count}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SupportIcon;
