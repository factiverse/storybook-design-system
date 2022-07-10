import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import Typography from '../Typography';

export interface RadioButtonsProps {
  radioButtons: string[];
  title: string;
  defaultValue?: string;
  margin?: 'none' | 'dense' | 'normal';
  size?: 'small' | 'medium';
}

const RadioButtons = (props: RadioButtonsProps) => {
  const {
    title,
    defaultValue,
    radioButtons,
    margin = 'none',
    size = 'small',
  } = props;

  return (
    <FormControl margin={margin} size={size}>
      <FormLabel id="demo-radio-buttons-group-label">
        <Typography variant="subtitle2" color="black">
          {title}
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={defaultValue}
        name="radio-buttons-group"
      >
        {radioButtons.map((button, key) => (
          <FormControlLabel
            key={key}
            value={button}
            control={<Radio size="small" color="secondary" />}
            label={<Typography variant="subtitle2">{button}</Typography>}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtons;
