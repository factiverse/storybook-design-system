import React from 'react';
import { Tooltip as MUITooltip, TooltipProps } from '@mui/material';
import Typography from '../Typography';

const Tooltip = (props: TooltipProps) => {
  const { children, title, arrow = false, placement = 'bottom' } = props;

  return (
    <MUITooltip
      title={<Typography variant="body2">{title}</Typography>}
      arrow={arrow}
      placement={placement}
    >
      {children}
    </MUITooltip>
  );
};

export default Tooltip;
