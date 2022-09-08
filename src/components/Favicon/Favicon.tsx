/* eslint-disable new-cap */
import { Paper } from '@mui/material';
import React from 'react';
interface FaviconProps {
  /* The link displayed in the UI */
  domain: string;
}

/* A component to display the link to the article and its publishing date */
const Favicon: React.FC<FaviconProps> = ({ domain }) => {
  return (
    <Paper sx={{ height: 34, width: 34 }} variant="outlined" elevation={3}>
      <img
        width={32}
        // DuckDuckGo scrapes favicons and catches all different ways of adding them to a website
        src={'https://icons.duckduckgo.com/ip2/www.' + domain + '.ico'}
        alt={'favicon ' + domain}
      />
    </Paper>
  );
};

export default Favicon;
