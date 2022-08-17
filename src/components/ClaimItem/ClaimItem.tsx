import React from 'react';
import { Grid, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import SourceList from '../SourceList/SourceList';
import FilterBar from '../Filter/FilterBar';
import ClearIcon from '@mui/icons-material/Clear';
import Loading from '../Loading/Loading';

export interface ClaimProps {
  // The claim that is displayed
  claim: Claim;
  // Triggered on interaction with the delete claim button
  onDeleteClaim: OnDeleteClaim;
  // Triggered on interaction with the feedback buttons
  onFeedbackCredibility: OnFeedbackCredibility;
  onFeedbackSourceRelevance: OnFeedbackSourceRelevance;
  onFeedbackSourceSupport: OnFeedbackSourceSupport;
  onCheckClaim: OnCheckClaim;
  evidence: Source[];
}

/*
 * Displays a claim in the UI
 */
export const ClaimItem: React.FC<ClaimProps> = ({
  claim,
  onDeleteClaim,
  onFeedbackSourceRelevance,
  onFeedbackSourceSupport,
}) => {
  // several conditionals when to show what
  const showIsBeingChecked = claim.isBeingChecked;
  const showSupportIndicator =
    claim.hasBeenChecked &&
    claim.score != undefined &&
    claim?.evidence &&
    claim.evidence.length > 0;
  const showSourcesButton =
    claim.hasBeenChecked && claim?.evidence && claim.evidence.length > 0;
  const showSourcesList =
    claim.hasBeenChecked && claim?.evidence && claim.evidence.length > 0;
  const showInsufficientData =
    claim.hasBeenChecked &&
    !showIsBeingChecked &&
    !showSupportIndicator &&
    !showSourcesButton &&
    !showSourcesList;

  const containsNumbers = /\d/.test(claim.claim);

  let supporting = 0;
  let balanced = 0;
  let disputing = 0;

  const [filter, setFilter] = React.useState([
    { label: 'Supporting', selected: false },
    { label: 'Disputing', selected: false },
    { label: 'Neutral', selected: false },
    { label: 'Google', selected: true },
    { label: 'Wikipedia', selected: true },
    { label: 'Google Claim', selected: true },
    { label: 'Bing News', selected: true },
  ]);
  const updateFilter = (newFilter: Array<Filter>) => {
    setFilter(newFilter);
  };

  claim.evidence?.forEach((source) => {
    if (
      typeof source === 'undefined' ||
      typeof source.softmaxScore === 'undefined'
    )
      return;
    if (source.softmaxScore[1] < 0.4) disputing++;
    if (source.softmaxScore[1] >= 0.4 && source.softmaxScore[1] < 0.6)
      balanced++;
    if (source.softmaxScore[1] >= 0.6) supporting++;
  });

  return (
    <Paper className="ClaimItem" elevation={4}>
      <Typography component={'span'} align="center">
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                <Typography variant="subtitle1">CLAIM:</Typography>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="Remove claim" arrow>
                  <IconButton size="small" onClick={() => onDeleteClaim(claim)}>
                    <ClearIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">{claim.claim}</Typography>
          </Grid>
          {containsNumbers && (
            <Grid item>
              <Typography variant="subtitle1">
                (Our technology currently works best with textual claims.
                Results could be inaccurate if you have numbers in the claim)
              </Typography>
            </Grid>
          )}
          {showSupportIndicator && (
            <Grid item>
              <FilterBar
                filter={filter}
                updateFilter={updateFilter}
                supporting={supporting}
                disputing={disputing}
                balanced={balanced}
              />
            </Grid>
          )}
          {showIsBeingChecked && (
            <Grid item>
              <Loading
                labels={[
                  'Unblurring the lines ...',
                  'Estimating support ...',
                  'Considering credibility ...',
                  'Bursting filter bubbles ...',
                  'Unblurring the lines ...',
                ]}
              />
            </Grid>
          )}
          {showSourcesList && (
            <Grid item>
              <SourceList
                claim={claim}
                sources={claim.evidence}
                onFeedbackSourceRelevance={onFeedbackSourceRelevance}
                onFeedbackSourceSupport={onFeedbackSourceSupport}
                filter={filter}
              />
            </Grid>
          )}
          {showInsufficientData && (
            <Grid item>Insufficient data for this claim</Grid>
          )}
        </Grid>
      </Typography>
    </Paper>
  );
};

export default ClaimItem;
