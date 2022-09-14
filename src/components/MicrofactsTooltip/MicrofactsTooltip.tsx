import React from 'react';
import { Box, Grid, Link, Paper, Theme } from '@mui/material';
import Popup from 'reactjs-popup';
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

export interface MicrofactsTooltipProps {
  entity: Entity;
  updateEntity: (toReplace: Entity, newEntity: Entity) => void;
}

export const MicrofactsTooltip = (props: MicrofactsTooltipProps) => {
  const classes = useStyles();
  const { entity, updateEntity } = props;

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
    // entity has to be defined
    entity != undefined &&
    // entity has to be selected to be shown
    entity.checked &&
    // entity is a key fact or all facts should be shown
    entity.keyFact;

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
            <Box
              style={{ backgroundColor: '#FFF9DA', cursor: 'pointer' }}
              component="span"
            >
              {entity.entity}
            </Box>
          )}
          position={[
            'bottom center',
            'bottom right',
            'bottom left',
            'left top',
            'right top',
          ]}
          onClose={onCloseFeedback}
          on={['click', 'focus']}
        >
          <Paper
            className={classes.tooltipPaper}
            elevation={4}
            color="secondary"
          >
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Link
                  href={entity.page_url}
                  target="_blank"
                  rel="noopener"
                  sx={{ outline: 'none' }} // TODO: How to disable default focus outline when Microfact is clicked? focus should only show once 'tab' is pressed
                >
                  <Typography variant="h5" sx={{ color: '#1976d2' }}>
                    {entity.entity}
                  </Typography>
                </Link>
                <Typography>Type: {entity.entity_type}</Typography>
              </Grid>
              <Grid container alignItems="center" ml={0.5}>
                <Typography>Source: </Typography>
                <Link
                  href={entity?.page_url?.replace(/[^/]+$/, '')}
                  target="_blank"
                  rel="noopener"
                >
                  <Typography
                    sx={{
                      textTransform: 'capitalize',
                      paddingLeft: 0.5,
                      color: '#1976d2',
                    }}
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
