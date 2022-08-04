import { CircularProgress, Grid, Tooltip } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';
import Box from '@mui/material/Box';
import './SupportIndicator.scss';
import Typography from '../Typography';

/*
 * A generic UI element to display support for a claim/by a source in 5 steps from low to high
 */
export interface SupportIndicatorProps {
  /* A number between 0.0 and 1.0 indicating the support for the claim. 0.0 being 'disputing the claim' and 1.0 being 'supporting the claim' */
  score: number;
  labels?: string[];
  tooltips?: string[];
  variant: string;
}

export const SupportIndicator: React.FC<SupportIndicatorProps> = ({
  score,
  labels,
  tooltips,
  variant,
}) => {
  const className = 'SupportIndicatorItem';
  const greenClass = ' green-common';
  const redClass = ' red-common';
  const yellowClass = ' yellow-common';

  const redColor = '#ff8761';
  const yellowColor = '#ffcd0f';
  const greenColor = '#86c351';

  let circleColor = '';
  if (score < 0.4) circleColor = redColor;
  if (score >= 0.4 && score < 0.6) circleColor = yellowColor;
  if (score >= 0.6) circleColor = greenColor;

  let label = '';
  if (score < 0.4) label = 'Disputing';
  if (score >= 0.4 && score < 0.6) label = 'Conflicting sources';
  if (score >= 0.6) label = 'Supporting';

  let tooltip = '';
  if (tooltips !== undefined) {
    if (score < 0.4) tooltip = tooltips[2];
    if (score >= 0.4 && score < 0.6) tooltip = tooltips[1];
    if (score >= 0.6) tooltip = tooltips[0];
  }

  let toAdd = '';
  if (score < 0.4) toAdd = redClass;
  if (score >= 0.4 && score < 0.6) toAdd = yellowClass;
  if (score >= 0.6) toAdd = greenClass;

  const classNames = [];
  for (let i = 0; i < 5; i++) {
    let newClassName = className;
    if (i == 0 || score >= i / 5) newClassName += toAdd;
    classNames[i] = newClassName;
  }

  const headlineVariant: Variant[] = ['subtitle1', 'subtitle1', 'subtitle1'];
  if (score < 0.4) headlineVariant[0] = 'h6';
  if (score >= 0.4 && score < 0.6) headlineVariant[1] = 'h6';
  if (score >= 0.6) headlineVariant[2] = 'h6';
  if (score > 1) score = 1;

  return (
    <>
      {variant == 'bar' && (
        <div className={'SupportIndicatorContainer'}>
          {labels?.length !== undefined && true && (
            <Grid sx={{ px: 10 }} container justifyContent={'space-between'}>
              {tooltips !== undefined && (
                <>
                  <Grid item>
                    <Tooltip title={tooltips[0]} arrow>
                      <div>
                        <Typography
                          variant={headlineVariant[0]}
                          fontFamily="DM Mono"
                        >
                          {labels[0]}
                        </Typography>
                      </div>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title={tooltips[1]} arrow>
                      <div>
                        <Typography
                          variant={headlineVariant[1]}
                          fontFamily="DM Mono"
                        >
                          {labels[1]}
                        </Typography>
                      </div>
                    </Tooltip>
                  </Grid>
                  <Grid item>
                    <Tooltip title={tooltips[2]} arrow>
                      <div>
                        <Typography
                          variant={headlineVariant[2]}
                          fontFamily="DM Mono"
                        >
                          {labels[2]}
                        </Typography>
                      </div>
                    </Tooltip>
                  </Grid>
                </>
              )}
              {tooltips === undefined && (
                <>
                  <Grid item>
                    <Typography
                      variant={headlineVariant[0]}
                      fontFamily="DM Mono"
                    >
                      {labels[0]}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant={headlineVariant[1]}
                      fontFamily="DM Mono"
                    >
                      {labels[1]}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant={headlineVariant[2]}
                      fontFamily="DM Mono"
                    >
                      {labels[2]}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          )}
          <div className={'SupportIndicator'}>
            {classNames.map((item) => {
              return <div className={item} key={Math.random()}></div>;
            })}
          </div>
        </div>
      )}

      {variant == 'circle' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            placeContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex' }}>
            <CircularProgress
              variant="determinate"
              value={score * 100}
              sx={{
                color: circleColor,
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {tooltips !== undefined && (
                <Tooltip title={tooltip} arrow>
                  <div>
                    <Typography variant="caption" fontFamily="DM Mono">{`${
                      score * 100
                    }%`}</Typography>
                  </div>
                </Tooltip>
              )}
              {tooltips === undefined && (
                <Typography variant="caption" fontFamily="DM Mono">{`${
                  score * 100
                }%`}</Typography>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SupportIndicator;
