/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Autocomplete as AutocompleteMUI } from '@mui/material';
import TextField from '../TextField';

interface AutocompleteProps {
  /**
   * The list of options to choose from which are narrowed down as the user types in the search field.
   */
  options?: string[];
  /**
   * The label of the search field.
   */
  label?: string;
}

/**
 * This component allows us to suggest inputs to the user. It displays a list of strings, if none are provided it behaves like a normal text field.
 * Wrapper for [Material UI Autocomplete](https://mui.com/material-ui/react-autocomplete/).
 *
 * @return {JSX.Element}
 */
export const Autocomplete = ({ options, label }: AutocompleteProps) => {
  return (
    <AutocompleteMUI
      disableClearable
      freeSolo
      autoHighlight={true}
      options={
        options !== undefined ? options.map((option: string) => option) : []
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
