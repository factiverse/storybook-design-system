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

/*
 * Displays a single source
 */
export const SourceItem: React.FC<SourceProps> = ({ source }) => {
  const clampText = (text: string, maxChars: number) => {
    if (text.length >= maxChars) return text.slice(0, maxChars) + '...';
    return text;
  };

  return (
    <Paper elevation={1} sx={{ overflow: 'hidden' }}>
      <Grid container direction="column" spacing={2}>
        <Grid
          item
          sx={{
            position: 'absolute',
            transform: 'translate( -50%, -35%)',
            left: '49%',
          }}
        >
          <Favicon domain={source.domain ?? ''} />
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
            <Grid item container spacing={1} width="calc(100% + 10px)">
              <Grid item xs>
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
            </Grid>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SourceItem;
