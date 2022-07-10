import Typography from '../Typography';
import React, { useEffect, useState } from 'react';
import './Loading.scss';

export interface LoadingProps {
  labels: string[];
}

export const Loading = (props: LoadingProps) => {
  const { labels } = props;
  const [currentLabel, setCurrentLabel] = useState(labels[0]);

  let currentLabelIndex = 0;
  const newLabel = () => {
    if (currentLabelIndex >= labels.length - 1) return;
    setTimeout(() => {
      setCurrentLabel(labels[currentLabelIndex]);
      currentLabelIndex++;
      newLabel();
    }, Math.max(3000, Math.random() * 6000));
  };

  useEffect(() => {
    newLabel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="sun"></div>
        <div className="dot-flashing"></div>
        <Typography
          variant="subtitle1"
          sx={{ color: 'grey', paddingTop: '1em' }}
        >
          {currentLabel}
        </Typography>
      </div>
    </>
  );
};

export default Loading;
