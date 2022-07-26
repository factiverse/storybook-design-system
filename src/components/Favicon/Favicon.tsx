/* eslint-disable new-cap */
import { Grid, Paper } from '@mui/material';
import React from 'react';
interface FaviconProps {
  /* The link displayed in the UI */
  displayLink: string;
  variant: string;
}

/* A component to display the link to the article and its publishing date */
const Favicon: React.FC<FaviconProps> = ({ displayLink, variant }) => {
  return (
    <>
      {variant == 'circleWrapped' && (
        <Paper
          sx={{ height: 34, width: 34, borderRadius: '50%' }}
          variant="outlined"
          elevation={3}
        >
          <Grid>
            <Grid
              item
              sx={{ height: 34, width: 34 }}
              display="flex"
              container
              alignItems="center"
              justifyContent="center"
            >
              <img
                height={32}
                width={32}
                src={'https://www.' + displayLink + '/favicon.ico'}
                alt={'favicon ' + displayLink}
                // If no favicon was found then hide the element
                onError={(i) =>
                  ((i.target as HTMLImageElement).style.display = 'none')
                }
              />
            </Grid>
          </Grid>
        </Paper>
      )}
      {variant == 'squareWrapped' && (
        <Paper sx={{ height: 34, width: 34 }} variant="outlined" elevation={3}>
          <Grid>
            <Grid
              item
              sx={{ height: 34, width: 34 }}
              display="flex"
              container
              alignItems="center"
              justifyContent="center"
            >
              <img
                height={32}
                width={32}
                src={'https://www.' + displayLink + '/favicon.ico'}
                alt={'favicon ' + displayLink}
                // If no favicon was found then hide the element
                onError={(i) =>
                  ((i.target as HTMLImageElement).style.display = 'none')
                }
              />
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default Favicon;
