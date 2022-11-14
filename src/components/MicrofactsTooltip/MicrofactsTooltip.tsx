import React from 'react';
import { Box, Grid, Theme, Card } from '@mui/material';
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
  const { entity } = props;

  const showMicrofact =
    // entity has to be defined
    entity != undefined &&
    // entity has to be selected to be shown
    entity.checked &&
    // entity is a key fact or all facts should be shown
    entity.keyFact;

  return (
    <>
      {showMicrofact ? (
        <Popup
          trigger={() => (
            <Box
              component="span"
              sx={{
                color: 'rgba(86, 82, 78, 1)',
                cursor: 'help',
                borderBottom: '1px dashed #56524E',
                textDecoration: 'none',
              }}
            >
              {entity.entity}
            </Box>
          )}
          position={[
            'bottom center',
            'bottom left',
            'bottom right',
            'right top',
            'top left',
            'top right',
          ]}
          closeOnDocumentClick
        >
          <Card
            sx={{
              backgroundColor: '#e9edee',
              color: '#000000',
              boxShadow: '0px 6px 7px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(7.5px)',
              borderRadius: '13px',
              borderBottom: '2px solid #FFE275',
              width: '42vw',
              maxWidth: '24rem',
              maxHeight: '20rem',
              overflowY: 'auto',
              padding: '0.5em',
            }}
          >
            <Grid container direction="column" spacing={0.5}>
              <Grid item>
                <Typography variant="h6">{entity.entity}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" fontSize={'0.9em'}>
                  {entity.description.length > 220
                    ? entity.description.slice(0, 220) + ' ...'
                    : entity.description}
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontFamily="DM Mono" fontSize={'0.8em'}>
                  Read more on:{' '}
                  {
                    <a href={entity.page_url} target="_blank" rel="noreferrer">
                      {entity.domain}
                    </a>
                  }
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Popup>
      ) : (
        <Box component="span">{entity?.entity}</Box>
      )}
    </>
  );
};

export default MicrofactsTooltip;
