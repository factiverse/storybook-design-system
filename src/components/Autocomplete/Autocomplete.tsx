/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Autocomplete as AutocompleteMUI } from '@mui/material';
import TextField from '../TextField';

interface AutocompleteProps {
  data?: string[];
  label?: string;
}

export const Autocomplete = ({ data, label }: AutocompleteProps) => {
  return (
    <AutocompleteMUI
      disableClearable
      freeSolo
      autoHighlight={true}
      options={data !== undefined ? data.map((option: string) => option) : []}
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
