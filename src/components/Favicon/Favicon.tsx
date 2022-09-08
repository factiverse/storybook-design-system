/* eslint-disable new-cap */
import { Paper } from '@mui/material';
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
      <img
        width={32}
        src={'https://www.' + domain + '/favicon.ico'}
        alt={'favicon ' + domain}
        onLoad={onLoad}
      />
    </Paper>
  );
};

export default Favicon;
