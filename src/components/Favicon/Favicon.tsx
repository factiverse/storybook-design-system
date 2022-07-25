/* eslint-disable new-cap */
import { Grid } from '@mui/material';
import React from 'react';
interface FaviconProps {
  /* The link displayed in the UI */
  displayLink: string;
  /* The full URL */
  link?: string;
}

/* A component to display the link to the article and its publishing date */
const Favicon: React.FC<FaviconProps> = ({ displayLink }) => {
  return (
    <Grid
      position="relative"
      container
      alignItems="center"
      spacing={1}
      justifyContent="center"
      className="DisplayLink"
    >
      <Grid item sx={{ position: 'absolute' }}>
        <img
          height={32}
          width={32}
          className={'Favicon'}
          src={'https://www.' + displayLink + '/favicon.ico'}
          alt={'favicon ' + displayLink}
          // If no favicon was found then hide the element
          onError={(i) =>
            ((i.target as HTMLImageElement).style.display = 'none')
          }
        />
      </Grid>
    </Grid>
  );
};

export default Favicon;
