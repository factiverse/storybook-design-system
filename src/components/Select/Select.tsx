import { SelectProps } from './Select.types';
import React, { useState, useMemo } from 'react';
import {
  FormControl,
  Select as MuiSelect,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Select: React.FC<SelectProps> = ({
  options,
  option,
  fixedOptions,
  setOption,
}) => {
  const containsText = (text: string, searchText: string) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const [searchText, setSearchText] = useState('');

  const displayedOptions = useMemo(
    () =>
      options
        .filter((option) => !fixedOptions?.includes(option))
        .filter((option) => containsText(option, searchText)),
    [options, fixedOptions, searchText]
  );

  const displayedFixedOptions = useMemo(
    () =>
      fixedOptions?.filter((option) => containsText(option, searchText)) ?? [],
    [searchText, fixedOptions]
  );

  return (
    <FormControl fullWidth>
      <InputLabel id="search-select-label">Language</InputLabel>
      <MuiSelect
        // Disables auto focus on MenuItems and allows TextField to be in focus
        MenuProps={{ autoFocus: false }}
        labelId="search-select-label"
        id="search-select"
        value={option}
        label="Options"
        onChange={(e) => setOption(e.target.value)}
        onClose={() => setSearchText('')}
        // This prevents rendering empty string in Select's value
        // if search text would exclude currently selected option.
        renderValue={() => option}
      >
        {/* TextField is put into ListSubheader so that it doesn't
              act as a selectable item in the menu
              i.e. we can click the TextField without triggering any selection.*/}
        <ListSubheader>
          <TextField
            size="small"
            // Autofocus on textfield
            autoFocus
            placeholder="Type to search..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Escape') {
                // Prevents autoselecting item while typing (default Select behaviour)
                e.stopPropagation();
              }
            }}
          />
        </ListSubheader>
        {displayedFixedOptions.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
        {displayedFixedOptions.length > 0 && displayedOptions.length > 0 && (
          <Divider />
        )}
        {displayedOptions.map((option, i) => (
          <MenuItem key={i} value={option}>
            {option}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
