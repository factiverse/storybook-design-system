import React, {useState} from 'react';
import { Autocomplete as AutocompleteMUI, Stack } from '@mui/material';
import TextField from '../TextField'
import PropTypes from 'prop-types';

interface SearchBarProps {
    id: string; 
    data: any
}

export const Autocomplete = ({data, id} : SearchBarProps) => {
  // const [value, setValue] = React.useState<HeadlineOptionType | null>(null);
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
        <AutocompleteMUI
          id={id}
          disableClearable
          options={data.map((option:any) => option.title)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Stack>
    );
  }

export default Autocomplete;