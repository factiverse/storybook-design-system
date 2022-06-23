import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '../Typography/Typography';
import Box from '@mui/material/Box';
import { Variant } from '@mui/material/styles/createTypography';
import './circularSupportIndicator.scss';
import { color } from '@mui/system';

export interface SupportIndicatorProps {
  /* A number between 0.0 and 1.0 indicating the support for the claim. 0.0 being 'disputing the claim' and 1.0 being 'supporting the claim' */
  score: number;
  labels: string[];
  tooltips: string[];
}

/**
 * test
 *
 * @param props test
 * @returns test
 */
export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{
          color: '#F8C608',
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
          color: '#F8C608',
        }}
      >
        <Typography
          variant="caption"
          color="#F8C608"
        >{`${props.value}%`}</Typography>
      </Box>
    </Box>
  );
}

/**
 * test
 *
 * @param props test
 * @returns test
 */
export default function CircularSupportIndicator(
  props: SupportIndicatorProps & {
    score: number;
    labels: string[];
    tooltips: string[];
  }
) {
  const className = 'SupportIndicatorItem';
  const greenClass = ' green-common';
  const redClass = ' red-common';
  const yellowClass = ' yellow-common';
  let toAdd = '';
  if (props.score < 0.4) toAdd = redClass;
  if (props.score >= 0.4 && props.score < 0.6) toAdd = yellowClass;
  if (props.score >= 0.6) toAdd = greenClass;

  const classNames = [];
  for (let i = 0; i < 5; i++) {
    let newClassName = className;
    if (i == 0 || props.score >= i / 5) newClassName += toAdd;
    classNames[i] = newClassName;
  }

  const variant: Variant[] = ['subtitle1', 'subtitle1', 'subtitle1'];
  if (props.score < 0.4) variant[0] = 'h6';
  if (props.score >= 0.4 && props.score < 0.6) variant[1] = 'h6';
  if (props.score >= 0.6) variant[2] = 'h6';

  return <CircularProgressWithLabel value={props.score * 100} />;
}
