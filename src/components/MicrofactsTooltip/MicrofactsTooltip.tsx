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
    factBoxCard: {
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
    },
    triggerBox: {
      color: 'rgba(86, 82, 78, 1)',
      cursor: 'help',
      borderBottom: '1px dashed #56524E',
      textDecoration: 'none',
    },
    link: {
      '&:focus': {
        outline: 'none',
      },
    },
  })
);

interface FactboxProps {
  entity: string;
  description: string;
  displayLink: string;
  link: string;
}

const Factbox = (props: FactboxProps) => {
  const classes = useStyles();
  const { entity, description, displayLink, link } = props;

  return (
    <Card className={classes.factBoxCard}>
      <Grid container direction="column" spacing={0.5}>
        <Grid item>
          <Typography variant="h6">{entity}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" fontSize={'0.9em'}>
            {description.length > 220
              ? description.slice(0, 220) + ' ...'
              : description}
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontFamily="DM Mono" fontSize={'0.8em'}>
            Read more on:{' '}
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              {displayLink}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export interface MicrofactsTooltipProps {
  microfact: Entity;
  keepTooltipInsideId?: string;
}

export const MicrofactsTooltip = (props: MicrofactsTooltipProps) => {
  const classes = useStyles();
  const { microfact, keepTooltipInsideId } = props;

  const capitalizeSentence = (sentence: string) =>
    sentence.charAt(0).toUpperCase() + sentence.slice(1);

  return (
    <>
      {microfact.checked ? (
        <Popup
          trigger={() => (
            <Box component="span" className={classes.triggerBox}>
              {microfact.text}
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
          arrow={false}
          closeOnDocumentClick
          keepTooltipInside={keepTooltipInsideId}
        >
          <Factbox
            entity={microfact.text}
            description={capitalizeSentence(
              microfact.description ?? 'Missing description'
            )}
            displayLink={capitalizeSentence(
              microfact.domain ?? 'Missing source'
            )}
            link={microfact.page_url ?? ''}
          />
        </Popup>
      ) : (
        <Box component="span">{microfact?.text}</Box>
      )}
    </>
  );
};

export default MicrofactsTooltip;
