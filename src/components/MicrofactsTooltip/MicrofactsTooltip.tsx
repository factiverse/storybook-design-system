import React from 'react';
import { Box, Grid, Link, Paper, Theme } from '@mui/material';
import Popup from 'reactjs-popup';
import withStyles from '@mui/styles/withStyles';
import Typography from '../Typography';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tooltipPaper: {
      padding: theme.spacing(1),
      width: '500px',
      maxWidth: '90vw',
    },
  })
);

const HighlightedText = withStyles({
  root: {
    backgroundColor: '#FFF9DA',
    cursor: 'pointer',
  },
})(Box);

export enum EntityType {
  PER = 'Person',
  ORG = 'Organization',
  LOC = 'Location',
}

export interface MicrofactsTooltipProps {
  entity: {
    description: string;
    checked?: boolean;
    keyFact?: boolean;
    entity: string;
    page_url: string;
    feedbackIsHelpful?: boolean;
    hasGivenFeedback?: boolean;
    entity_type: EntityType;
    showFeedback?: boolean;
    domain: string;
  };
  updateEntity: (toReplace: object, newEntity: object) => void;
  sliderState: number;
}

export const MicrofactsTooltip = (props: MicrofactsTooltipProps) => {
  const classes = useStyles();
  const { entity, updateEntity, sliderState } = props;

  const onCloseFeedback = () => {
    if (
      entity != undefined &&
      entity.feedbackIsHelpful != undefined &&
      entity.hasGivenFeedback != undefined &&
      entity.hasGivenFeedback
    )
      updateEntity(entity, { ...entity, showFeedback: false });
  };

  const showMicrofact =
    // hide all if the slider is set to show no microfacts
    sliderState != 0 &&
    // entity has to be defined
    entity != undefined &&
    // entity has to be selected to be shown
    entity.checked &&
    // entity is a key fact or all facts should be shown
    ((sliderState == 1 && entity.keyFact) || sliderState == 2);

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
      {showMicrofact && (
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
          <Paper
            className={classes.tooltipPaper}
            elevation={4}
            color="secondary"
          >
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Link href={entity.page_url} target="_blank" rel="noopener">
                  <Typography variant="h5">{entity.entity}</Typography>
                </Link>
                <Typography>Type: {entity.entity_type}</Typography>
              </Grid>
              <Grid container alignItems="center" ml={1}>
                <Typography>Source: </Typography>
                <Link
                  href={entity?.page_url?.replace(/[^/]+$/, '')}
                  target="_blank"
                  rel="noopener"
                >
                  <Typography
                    sx={{ textTransform: 'capitalize', paddingLeft: 0.5 }}
                  >
                    {entity.domain}
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  {getMaxLengthDescription()}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Popup>
      )}
      {entity && !showMicrofact && entity.entity}
    </>
  );
};

export default MicrofactsTooltip;