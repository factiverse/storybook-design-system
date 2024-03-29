import React, {
  ChangeEventHandler,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import { FormControl, Typography, InputAdornment } from '@mui/material';
import TextField from '../TextField';
import Button from '../Button';
import { ComponentVariant, ComponentColor } from '../../config/sizes';

export interface SearchBarProps {
  width?: string;
  value: string;
  onChange: (newValue: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
  variant?: ComponentVariant;
  color?: ComponentColor;
  disabled?: boolean;
  focused?: boolean;
  label?: string;
  error?: boolean;
  helperText?: string;
  sx?: object;
}

const SearchBar = (props: SearchBarProps) => {
  const {
    value,
    onChange,
    placeholder,
    variant,
    color,
    disabled = false,
    focused = false,
    label,
    error,
    helperText,
    onSearch,
    sx,
  } = props;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(event.target.value);
  };

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onSearch(value);
  };

  const handleEnterClick: KeyboardEventHandler<HTMLDivElement> = () => {
    onSearch(value);
  };

  return (
    <FormControl fullWidth variant={variant} sx={sx}>
      <TextField
        focused={focused}
        variant={variant}
        value={value}
        onChange={handleChange}
        color={color}
        label={label}
        error={error}
        helperText={helperText}
        onKeyDown={handleEnterClick}
        // TODO: # 125 Use random/popular claims as the placeholder, let the user check one without having to type anything
        placeholder={placeholder}
        sx={{
          '& .MuiInputBase-root': {
            fontFamily: 'DM Mono',
          },
        }}
        inputProps={{ maxLength: 150 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="ph-magnifying-glass"></i>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <Button
                variant={'contained'}
                color="secondary"
                disabled={disabled}
                onClick={handleClick}
              >
                <Typography variant="button">Check claim</Typography>
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
