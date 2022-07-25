/* eslint-disable new-cap */
import { Grid, Paper, Link } from '@mui/material';
import Typography from '../Typography';
import React from 'react';
import SupportIndicator from '../SupportIndicator/SupportIndicator';
import Favicon from '../Favicon/Favicon';
import { Box } from '@mui/system';

interface SourceProps {
  claim: Claim;
  /* The source supporting/rejecting its corresponding claim */
  source: Source;
  onFeedbackSourceRelevance?: OnFeedbackSourceRelevance;
  onFeedbackSourceSupport?: OnFeedbackSourceSupport;
}

// A textual assertion given by the user.
type Claim = {
  // A unique id
  id: string;
  /**
   * The claim text.
   *
   * @example
   * The earth is flat.
   */
  claim: string;
  // The language of the claim
  language?: string;
  // The position within the text.
  indexInText?: number;
  // True if claim should be hidden from results.
  hide?: boolean;
  // The assessment by the Factiverse AI. An Integer which ranges between 0 (false) and 100 (true).
  score?: number;
  // The list of sources relevant to this claim, supporting or rejecting it.
  evidence?: Array<Source>;
  // True if this claim has been fact checked before.
  hasBeenChecked?: boolean;
  // True if this claim is currently being fact checked and waiting for a response.
  isBeingChecked?: boolean;
  // True if the user has submitted positive feedback on the credibility assessment. Undefined if no feedback was given yet
  userAgrees?: boolean;
};

/**
 * A single source found to support/reject a claim.
 *
 * @example
 * A news article writing about the claim.
 */
type Source = {
  // A unique id
  id: string;
  // The title of the source, typically the headline.
  title?: string;
  // True if source should be hidden from results
  hide: boolean;
  // A short part of the text, ideally the most relevant part to the claim.
  snippet?: string;
  // The date on which the source was published.
  publishDate?: string;
  // The link linking to the source.
  url?: string;
  // The link displayed to the user, typically not the full link.
  domain?: string;
  searchEngine?: string;
  /*
   * The assessment by the Factiverse AI.
   * An Integer which ranges between 0 (doesn't support the claim)
   * and 100 (supports the claim).
   */
  softmaxScore?: number[];
  // True if the user has submitted positive feedback on the relevance. Undefined if no feedback was given yet
  userAgreesRelevance?: boolean;
  // True if the user has submitted positive feedback on the support assessment. Undefined if no feedback was given yet
  userAgreesSupport?: boolean;
};

type OnFeedbackSourceRelevance = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;
type OnFeedbackSourceSupport = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;

/*
 * Displays a single source
 */
export const SourceItem: React.FC<SourceProps> = ({ source }) => {
  const clampText = (text: string, maxChars: number) => {
    if (text.length >= maxChars) return text.slice(0, maxChars) + '...';
    return text;
  };

  return (
    <Paper elevation={1}>
      <Grid container direction="column" className="SourceItem" spacing={2}>
        <Grid
          item
          sx={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '49%',
          }}
        >
          <Paper variant="outlined" elevation={3}>
            <Favicon
              displayLink={source.domain ?? ''}
              link={source.url ?? ''}
            />
          </Paper>
        </Grid>
        <Box sx={{ px: 7, pt: 5 }}>
          {source.publishDate != '' && source.publishDate != undefined && (
            <Grid item>
              <Typography variant="body1" color="textSecondary">
                {new Date(source.publishDate).toLocaleDateString()}
              </Typography>
            </Grid>
          )}
          {source?.title && (
            <Grid item container spacing={1} alignItems={'center'}>
              <Grid item xs>
                <Link
                  color="rgba(0, 0, 0, 0.87)"
                  href={source.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  underline="none"
                >
                  <Typography variant="h4">
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
        </Box>
        <Grid item>
          {source.softmaxScore?.[1] && (
            <Grid item container spacing={1} alignItems={'stretch'}>
              <Grid item xs sx={{ mb: 0 }}>
                <SupportIndicator
                  score={source.softmaxScore[1]}
                  labels={['Disputing', 'Conflicting sources', 'Supporting']}
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
  );
};

export default SourceItem;
