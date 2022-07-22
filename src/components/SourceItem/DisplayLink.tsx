/* eslint-disable new-cap */
import { Grid, Link } from '@mui/material';
import React from 'react';
import Plausible from 'plausible-tracker';

/* The properties needed to display a link back to the original article of this source */
interface DisplayLinkProps {
  /* The link displayed in the UI */
  displayLink: string;
  /* The full URL */
  link: string;
}

/* A component to display the link to the article and its publishing date */
const DisplayLink: React.FC<DisplayLinkProps> = ({ displayLink, link }) => {
  const { trackEvent } = Plausible();

  const onLinkClicked = () => {
    trackEvent('Button: Link to source');
  };

  return (
    <Link
      rel="noopener noreferrer"
      href={link}
      target="_blank"
      color="textSecondary"
      onClick={onLinkClicked}
    >
      <Grid
        container
        alignItems="center"
        spacing={1}
        justifyContent="center"
        className="DisplayLink"
      >
        <Grid item>
          <img
            className={'Favicon'}
            src={'https://www.' + displayLink + '/favicon.ico'}
            alt={'favicon ' + displayLink}
            // If no favicon was found then hide the element
            onError={(i) =>
              ((i.target as HTMLImageElement).style.display = 'none')
            }
            onClick={onLinkClicked}
          />
        </Grid>
        <Grid item>{displayLink}</Grid>
      </Grid>
    </Link>
  );
};

export default DisplayLink;
