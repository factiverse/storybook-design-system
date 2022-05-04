import React, { ChangeEventHandler, HTMLAttributes } from 'react';
import { FormControl, Typography, InputAdornment, FormControlProps} from '@mui/material';
import PropTypes from 'prop-types';
import TextField from '../TextField';
import Button from '../Button';
import { ComponentSize } from '../../config/sizes';

export interface SearchModel {
    text?: string;
}

export interface SearchBarProps {
    className?: string;
    size?: ComponentSize;
    width?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}

const SearchBar: React.ForwardRefRenderFunction<HTMLDivElement, SearchBarProps> = (props, ref) => {

    const { 
        size = 'default',
        className,
        value,
        onChange,
        placeholder,
        width = '100%',
    } = props;

    return (
        <FormControl variant="outlined" fullWidth>
        <TextField
          aria-label={'Check a claim'}
          variant={'outlined'}
          value={value}
          onChange={onChange}
        //   onKeyDown={onEnter}
          // TODO: #125 Use random/popular claims as the placeholder, let the user check one without having to type anything
          placeholder={
            'Type your own claim to see fact checks, sources and disputes'
          }
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
                  variant={'contained'}
                  aria-label={'Check claim'}
                //   onClick={onCheckClaimClicked}
                  color={'secondary'}
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