import { Grid, Typography, LinearProgress, Box } from '@mui/material';
import { withStyles } from '@mui/styles';
import React from 'react';

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    borderRadius: 10,
  },
  bar: {
    borderRadius: 10,
  },
})(LinearProgress);

/*
 * A generic UI element to display support for a claim/by a source in 5 steps from low to high
 */
export interface SupportIndicatorProps {
  /* The number of supporting/disputing/balanced sources */
  supporting: number;
  disputing: number;
  balanced: number;
  labels: string[];
}

export const SupportIndicatorUpdated: React.FC<SupportIndicatorProps> = ({
  supporting,
  disputing,
  balanced,
  labels,
}) => {
  const total = supporting + disputing + balanced;

  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h5">Found {total} sources:</Typography>
      </Grid>
      <Grid item>
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid item>
            <Box>
              <BorderLinearProgress
                variant="determinate"
                value={supporting != 0 ? (supporting / total) * 100 : 5}
                className="ProgressSupported"
              />
              <Typography variant="subtitle1">{supporting}</Typography>
              <Typography variant="h6">{labels[0]}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <BorderLinearProgress
                variant="determinate"
                value={balanced != 0 ? (balanced / total) * 100 : 5}
                className="ProgressBalanced"
              />
              <Typography variant="subtitle1">{balanced}</Typography>
              <Typography variant="h6">{labels[1]}</Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <BorderLinearProgress
                variant="determinate"
                value={disputing != 0 ? (disputing / total) * 100 : 5}
                className="ProgressUnsupported"
              />
              <Typography variant="subtitle1">{disputing}</Typography>
              <Typography variant="h6">{labels[2]}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SupportIndicatorUpdated;