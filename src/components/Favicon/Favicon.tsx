/* eslint-disable new-cap */
import { Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
interface FaviconProps {
  /* The link displayed in the UI */
  domain: string;
}

/* A component to display the link to the article and its publishing date */
const Favicon: React.FC<FaviconProps> = ({ domain }) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    console.log('loaded');
    setLoaded(true);
  };

  return (
    <Paper
      sx={{ height: 34, width: 34, display: loaded ? 'block' : 'none' }}
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
            src={'https://www.' + domain + '/favicon.ico'}
            alt={'favicon ' + domain}
            onLoad={onLoad}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Favicon;
