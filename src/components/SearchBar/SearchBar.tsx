import React, { ChangeEventHandler} from 'react';
import { FormControl, Typography, InputAdornment} from '@mui/material';
import TextField from '../TextField';
import Button from '../Button';
import { ComponentSize, ComponentVariant, ComponentColor } from '../../config/sizes';

export interface SearchBarProps {
    className?: string;
    size?: ComponentSize;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    variant?: ComponentVariant
    color ?: ComponentColor
    disabled ?: boolean,
    focused ?: boolean
}

const SearchBar: React.ForwardRefRenderFunction<HTMLDivElement, SearchBarProps> = (props, ref) => {

    const { 
        size = 'medium',
        className,
        value,
        onChange,
        placeholder,
        width = '100%',
        variant,
        color,
        disabled = false,
        focused = false
    } = props;


    return (
        <FormControl disabled={disabled} variant={variant} fullWidth>
        <TextField
          focused={focused}
          disabled={disabled}
          variant={variant}
          value={value}
          onChange={onChange}
          color={color}
        //   onKeyDown={onEnter}
          // TODO: #125 Use random/popular claims as the placeholder, let the user check one without having to type anything
          placeholder={placeholder}
          sx={{
            '& .MuiInputBase-root': {
              fontFamily: 'DM Mono',
            },
          }}
          inputProps={{ maxLength: 150 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  disabled={disabled}
                  size={size}
                  variant={'contained'}
                //   onClick={onCheckClaimClicked}
                  color={color}
                >
                  <Typography variant="button">Check claim</Typography>
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    )
};

export default SearchBar;