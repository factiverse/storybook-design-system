import React from 'react';
import { Box, Grid, Link, Paper } from '@mui/material';
import Popup from 'reactjs-popup';
import withStyles from '@mui/styles/withStyles';
import Typography from '../Typography';

const HighlightedText = withStyles({
  root: {
    backgroundColor: '#FFF9DA',
    cursor: 'pointer',
  },
})(Box);

export interface MicrofactsTooltipProps {
  entity?: {
    description: string;
    checked?: boolean;
    keyFact?: boolean;
    entity: string;
    page_url: string;
    feedbackIsHelpful?: boolean;
    hasGivenFeedback?: boolean;
    entity_type: string;
    showFeedback?: boolean;
  };
  updateEntity: (toReplace: object, newEntity: object) => void;
  // sliderState: number;
}

export const MicrofactsTooltip = (props: MicrofactsTooltipProps) => {
  const { entity, updateEntity /* sliderState */ } = props;

  const onCloseFeedback = () => {
    if (
      entity != undefined &&
      entity.feedbackIsHelpful != undefined &&
      entity.hasGivenFeedback != undefined &&
      entity.hasGivenFeedback
    )
      updateEntity(entity, { ...entity, showFeedback: false });
  };

  /* const showMicrofact =
    // hide all if the slider is set to show no microfacts
    sliderState != 0 &&
    // entity has to be defined
    entity != undefined &&
    // entity has to be selected to be shown
    entity.checked &&
    // entity is a key fact or all facts should be shown
    ((sliderState == 1 && entity.keyFact) || sliderState == 2); */

  const getMaxLengthDescription = () => {
    const sentences = entity?.description.split('. ') ?? [];
    let result = '';
    for (let i = 0; i < 6 && i < sentences.length; i++) {
      result = result.concat(sentences[i], '. ');
    }
    return result.slice(0, result.length - 2) + '..';
  };

  return (
    <>
      {entity != undefined && (
        <Popup
          trigger={() => (
            <HighlightedText component="span">{entity.entity}</HighlightedText>
          )}
          position={[
            'bottom center',
            'bottom right',
            'bottom left',
            'left top',
            'right top',
          ]}
          onClose={onCloseFeedback}
          on={['hover', 'focus']}
          mouseEnterDelay={100}
          mouseLeaveDelay={300}
        >
          <Paper className="Tooltip" elevation={4} color="secondary">
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Link href={entity.page_url} target="_blank" rel="noopener">
                  <Typography variant="h5">
                    {entity.entity}
                    {' ['}
                    {entity.entity_type}
                    {']'}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {getMaxLengthDescription()}
                </Typography>
              </Grid>
              {/* entity.showFeedback && (
                <Grid item>
                  <Box mt={4}>
                    <FeedbackReader
                      entity={entity}
                      updateEntity={updateEntity}
                    />
                  </Box>
                </Grid>
              ) */}
            </Grid>
          </Paper>
        </Popup>
      )}
      {entity && /* !showMicrofact  && */ entity.entity}
    </>
  );
};

export default MicrofactsTooltip;
