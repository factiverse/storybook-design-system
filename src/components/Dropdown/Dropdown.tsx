import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';

export interface DropdownProps {
  label?: string;
  handleChange?: () => void;
  values: string[];
  defaultValue: string;
  margin?: 'none' | 'normal' | 'dense';
}

const Dropdown = (props: DropdownProps) => {
  const { label, handleChange, values, defaultValue, margin = 'none' } = props;

  return (
    <FormControl fullWidth margin={margin}>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={defaultValue}
        label={label}
        onChange={handleChange}
      >
        {values.map((value, key) => (
          <MenuItem key={key} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
