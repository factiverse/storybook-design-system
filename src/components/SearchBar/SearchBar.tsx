import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { FormControl, Typography, InputAdornment } from '@mui/material';
import TextField from '../TextField';
import Button from '../Button';
import {
  ComponentSize,
  ComponentVariant,
  ComponentColor,
} from '../../config/sizes';

export interface SearchBarProps {
  size?: ComponentSize;
  width?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  placeholder?: string;
  variant?: ComponentVariant;
  color?: ComponentColor;
  disabled?: boolean;
  focused?: boolean;
  label?: string;
  sx?: object;
}

const SearchBar: React.ForwardRefRenderFunction<
  HTMLDivElement,
  SearchBarProps
> = (props) => {
  const {
    size = 'medium',
    value,
    onChange,
    placeholder,
    variant,
    color,
    disabled = false,
    focused = false,
    label,
    onClick,
    sx,
  } = props;

  return (
    <FormControl fullWidth variant={variant} sx={sx}>
      <TextField
        focused={focused}
        variant={variant}
        value={value}
        onChange={onChange}
        color={color}
        label={label}
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
                size={size}
                variant={'contained'}
                color={color}
                disabled={disabled}
                onClick={onClick}
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
