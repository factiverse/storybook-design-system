import React, { ChangeEvent } from 'react';
import {
  Box,
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
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: string[];
  checkedValues: string[];
  allCheckbox?: boolean;
  handleChangeAll?: (event: ChangeEvent<HTMLInputElement>) => void;
  margin?: 'none' | 'normal' | 'dense';
}

const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    title,
    helperText,
    checkboxes,
    disabled,
    handleChange,
    checkedValues,
    allCheckbox = true,
    handleChangeAll,
    margin = 'none',
  } = props;

  return (
    <FormControl component="fieldset" variant="standard" margin={margin}>
      <FormLabel component="legend">
        <Typography variant="subtitle2" color="black">
          {title}
        </Typography>
      </FormLabel>
      <FormGroup>
        {allCheckbox && (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkboxes.toString() === checkedValues.toString()}
                onChange={handleChangeAll}
                color="primary"
                size="small"
                name="All"
              />
            }
            label={<Typography variant="subtitle2">All</Typography>}
          />
        )}
        {checkboxes.map((checkbox, key) => (
          <Box ml={2} key={key}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedValues.includes(checkbox)}
                  onChange={handleChange}
                  name={checkbox}
                  size="small"
                  value={checkbox}
                  color="primary"
                />
              }
              disabled={disabled?.includes(checkbox)}
              label={<Typography variant="subtitle2">{checkbox}</Typography>}
            />
          </Box>
        ))}
      </FormGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxGroup;
