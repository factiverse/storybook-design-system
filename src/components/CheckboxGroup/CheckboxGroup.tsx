import React from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import Typography from '../Typography';

export interface CheckboxGroupProps {
  title: string;
  helperText?: string;
  checkboxes: string[];
  handleChange: () => void;
  disabled?: string[];
  checkedValues: string[];
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    title,
    helperText,
    checkboxes,
    disabled,
    handleChange,
    checkedValues,
  } = props;

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">
        <Typography variant="subtitle2" color="black">
          {title}
        </Typography>
      </FormLabel>
      <FormGroup>
        {checkboxes.map((checkbox, key) => (
          <FormControlLabel
            key={key}
            control={
              <Checkbox
                checked={checkedValues.includes(checkbox)}
                onChange={handleChange}
                name={checkbox}
                size="small"
                value={checkbox}
                color="secondary"
              />
            }
            disabled={disabled?.includes(checkbox)}
            label={<Typography variant="subtitle2">{checkbox}</Typography>}
          />
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxGroup;
