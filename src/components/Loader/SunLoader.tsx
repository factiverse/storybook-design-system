
import Typography from '../Typography';
import React, { useState } from 'react';
import './SunLoader.scss'

export interface SunLoaderProps {
    loadingText?: string[]
}

const loadingTexts = [
    'Unblurring the lines ...',
    'Estimating support ...',
    'Considering credibility ...',
    'Bursting filter bubbles ...',
    'Unblurring the lines ...',
  ];

const SunLoader = (props: SunLoaderProps) =>
{ 
    const [loadingText, setLoadingText] = React.useState(
        'Unblurring the lines ...'
      );
    
      let currentLoadingText = 0;
      const newLoadingText = () => {
        if (currentLoadingText >= loadingTexts.length - 1) return;
        setTimeout(() => {
          setLoadingText(loadingTexts[currentLoadingText]);
          currentLoadingText++;
          newLoadingText();
        }, Math.max(30, Math.random() * 150));
      };

    return (
    <>
<div className="container">
<div className="sun"></div>
<div className="dot-flashing"></div>
<Typography
  variant="subtitle1"
  sx={{ color: 'grey', paddingTop: '1em' }}
>
  {loadingText}
</Typography>
</div>
</>
);
};

export default SunLoader