import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';

export interface DropdownProps {
  label?: string;
  handleChange: (event: SelectChangeEvent) => void;
  values: string[];
  value: string;
  margin?: 'none' | 'normal' | 'dense';
}

const Dropdown = (props: DropdownProps) => {
  const { label, handleChange, values, value, margin = 'none' } = props;

  return (
    <FormControl fullWidth margin={margin}>
      {label && <InputLabel id="demo-simple-select-label">{label}</InputLabel>}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
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
