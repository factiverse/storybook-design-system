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
  filter?: Array<Filter>;
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
  /**
   * Checks if the source should be hidden from results
   *
   * @param {Object} source The source
   * @return {boolean} True if the source should not be shown
   */

  let supporting = 0;
  let balanced = 0;
  let disputing = 0;

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

  //   const show = supporting > 0 || disputing > 0 || balanced > 0;

  return (
    <>
      <Card
        variant="outlined"
        // sx={{
        //   minHeigh: '180px',
        //   maxHeigh: '450px',
        //   overflowY: 'auto',
        //   overflowX: 'hidden',
        // }}
      >
        <Grid container spacing={4}>
          {sources?.map((source) => {
            return (
              <Grid
                key={source.id}
                item
                sx={{
                  minHeigh: '180px',
                  maxHeigh: '450px',
                  //   overflowY: 'auto',
                  //   overflowX: 'hidden',
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
