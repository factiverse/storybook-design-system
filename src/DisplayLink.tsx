import { Box, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// The properties needed to display a link back to the original article of this source
export interface DisplayLinkProps {
  // The link displayed in the UI
  displayLink?: string;
  // The full URL
  link?: string;
}

/* A component to display the link to the article */
export const DisplayLink: React.FC<DisplayLinkProps> = ({
  displayLink,
  link,
}) => {
  // Is true if the favicon should be displayed, gets set to false if an error occurs when loading it
  const [displayFavicon, setDisplayFavicon] = React.useState(true);

  if (displayLink === undefined && link !== undefined)
    displayLink = new URL(link).hostname.replace('www.', '');

  return (
    // Open the source in a new tab
    <Link rel="noopener noreferrer" href={link} target="_blank">
      <Grid container alignItems="center" justifyContent="center" spacing={1}>
        {/* Only display the favicon if it was loaded successfully */}
        {displayFavicon && (
          <Grid item>
            <Box
              // Give the favicon a circular shadow
              sx={{ boxShadow: 2, borderRadius: '50%' }}
              width="28px"
              height="28px"
              p="8px"
            >
              <img
                // Get the favicon from the source site
                src={'https://www.' + displayLink + '/favicon.ico'}
                alt={'favicon'}
                // If no favicon was found then hide the element
                onError={() => setDisplayFavicon(false)}
                width="28px"
                height="28px"
              />
            </Box>
          </Grid>
        )}

        <Grid item>
          {/* Align the display link with the "open new" icon */}
          <Grid container alignItems="flex-end">
            <Grid item>
              <Typography>{displayLink}</Typography>
            </Grid>
            <Grid item>
              <OpenInNewIcon fontSize="inherit" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
