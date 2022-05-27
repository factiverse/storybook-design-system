/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Autocomplete as AutocompleteMUI, Stack } from '@mui/material';
import TextField from '../TextField';

interface AutocompleteProps {
  id: string;
  data: any;
  label: string;
  fullWidth?: boolean;
}

export const Autocomplete = ({
  data,
  id,
  fullWidth,
  label,
}: AutocompleteProps) => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <AutocompleteMUI
        id={id}
        fullWidth={fullWidth}
        disableClearable
        options={data.map((option: any) => option.title)}
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
    </Stack>
  );
};

export default Autocomplete;
