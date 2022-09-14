import { CircularProgress, Grid, Tooltip } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import React, { useEffect, useRef, useState } from 'react';
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

  const refContainer = useRef<HTMLHeadingElement>(null);
  const [width, setWidth] = useState(0);
  const handleResize = () => {
    if (refContainer.current) {
      setWidth(refContainer.current.offsetWidth);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize, false);
    handleResize();
  }, []);

  return (
    <>
      {variant == 'bar' && (
        <div className={'SupportIndicatorContainer'} ref={refContainer}>
          {width > 400 && labels != undefined && (
            <Grid container justifyContent={'space-between'}>
              {labels.map((label, index) => {
                return (
                  <Grid item key={label}>
                    <Tooltip title={tooltips?.[index] ?? ''} arrow>
                      <div>
                        <Typography
                          variant={headlineVariant[index]}
                          fontFamily="DM Mono"
                        >
                          {label}
                        </Typography>
                      </div>
                    </Tooltip>
                  </Grid>
                );
              })}
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
