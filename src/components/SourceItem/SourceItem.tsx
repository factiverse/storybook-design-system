/* eslint-disable new-cap */
import Plausible from 'plausible-tracker';
import { Grid, Paper, Link, Box } from '@mui/material';
import Typography from '../Typography';
import React from 'react';
import SupportIndicator from '../SupportIndicator/SupportIndicator';

interface SourceProps {
  claim: Claim;
  /* The source supporting/rejecting its corresponding claim */
  source: Source;
  onFeedbackSourceRelevance?: OnFeedbackSourceRelevance;
  onFeedbackSourceSupport?: OnFeedbackSourceSupport;
}

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
          height={50}
          width={50}
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
    </Grid>
  );
};

/*
 * Displays a single source
 */
export const SourceItem: React.FC<SourceProps> = ({ source }) => {
  // TODO: #98 Implement custom support indicator

  const clampText = (text: string, maxChars: number) => {
    if (text.length >= maxChars) return text.slice(0, maxChars) + '...';
    return text;
  };

  return (
    <Box sx={{ margin: 18 }}>
      <Paper elevation={1}>
        <Grid container direction="column" className="SourceItem" spacing={2}>
          <Grid item>
            <DisplayLink
              displayLink={source.domain ?? ''}
              link={source.url ?? ''}
            />
          </Grid>
          {source.publishDate != '' && source.publishDate != undefined && (
            <Grid item>
              <Typography variant="subtitle1" fontFamily="Roboto">
                {new Date(source.publishDate).toLocaleDateString()}
              </Typography>
            </Grid>
          )}
          {source?.title && (
            <Grid item container spacing={1} alignItems={'center'}>
              <Grid item xs>
                <Link
                  href={source.url}
                  color="textSecondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Typography variant="h5">
                    {clampText(source.title, 80)}
                  </Typography>
                </Link>
              </Grid>
              {/* <Grid item xs={1}>
              <FeedbackSourceRelevance
                claim={claim}
                source={source}
                onFeedbackSourceRelevance={onFeedbackSourceRelevance}
              />
            </Grid> */}
            </Grid>
          )}
          <Grid item>
            <Typography variant="body1">
              {clampText(source.snippet ?? '', 160)}
            </Typography>
          </Grid>
          <Grid item>
            {source.softmaxScore?.[1] && (
              <Grid item container spacing={1} alignItems={'stretch'}>
                <Grid item xs>
                  <SupportIndicator
                    score={source.softmaxScore[1]}
                    labels={['Disputing', 'Balanced', 'Supporting']}
                    tooltips={[
                      'This source is disputing the claim.',
                      'This source is ambivalent to the claim.',
                      'This source is supporting the claim.',
                    ]}
                    variant={'bar'}
                  />
                </Grid>
                {/* <Grid item xs={1}>
              <FeedbackSourceSupport
                claim={claim}
                source={source}
                onFeedbackSourceSupport={onFeedbackSourceSupport}
              />
            </Grid> */}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default SourceItem;
