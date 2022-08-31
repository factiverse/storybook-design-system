import { Grid, Card } from '@mui/material';
import React from 'react';
import SourceItem from '../SourceItem/SourceItem';

/*
 * The properties needed to display a list of sources
 * in the UI and offer functionality.
 */
interface SourceListProps {
  claim: Claim;
  /** The list of sources relevant to a claim */
  sources?: Array<Source>;
  onFeedbackSourceRelevance?: OnFeedbackSourceRelevance;
  onFeedbackSourceSupport?: OnFeedbackSourceSupport;
  filter?: Filter;
}

/*
 * Displays a list of sources
 */
export const SourceList: React.FC<SourceListProps> = ({
  claim,
  sources,
  onFeedbackSourceRelevance,
  onFeedbackSourceSupport,
}) => {
  return (
    <>
      <Card variant="outlined">
        <Grid container spacing={4}>
          {sources?.map((source) => {
            return (
              <Grid
                key={source.id}
                item
                sx={{
                  minHeigh: '180px',
                  maxHeigh: '450px',
                }}
                xs={12}
                md={6}
                xl={3}
              >
                <SourceItem
                  claim={claim}
                  source={source}
                  onFeedbackSourceRelevance={onFeedbackSourceRelevance}
                  onFeedbackSourceSupport={onFeedbackSourceSupport}
                />
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </>
  );
};

export default SourceList;
