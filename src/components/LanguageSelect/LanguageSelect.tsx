// Generated with util/create-component.js
import { LanguageSelectProps } from './LanguageSelect.types';
import './LanguageSelect.scss';
import React, { useState, useMemo } from 'react';
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  ListSubheader,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  languages,
  language,
  fixedLanguages,
  setLanguage,
}) => {
  const containsText = (text: string, searchText: string) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const allOptions = languages;

  const [searchText, setSearchText] = useState('');
  const displayedOptions = useMemo(
    () =>
      allOptions
        .filter((option) => !fixedLanguages?.includes(option))
        .filter((option) => containsText(option, searchText)),
    [allOptions, fixedLanguages, searchText]
  );

  const displayedFixedOptions = useMemo(
    () =>
      fixedLanguages?.filter((option) => containsText(option, searchText)) ??
      [],
    [searchText, fixedLanguages]
  );

  return (
    <Box sx={{ m: 10 }}>
      <FormControl fullWidth>
        <InputLabel id="search-select-label">Language</InputLabel>
        <Select
          // Disables auto focus on MenuItems and allows TextField to be in focus
          MenuProps={{ autoFocus: false }}
          labelId="search-select-label"
          id="search-select"
          value={language}
          label="Options"
          onChange={(e) => setLanguage(e.target.value)}
          onClose={() => setSearchText('')}
          // This prevents rendering empty string in Select's value
          // if search text would exclude currently selected option.
          renderValue={() => language}
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
          {displayedFixedOptions.length > 0 &&
            displayedFixedOptions.map((option, i) => (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            ))}
          {displayedFixedOptions.length > 0 && <Divider />}
          {displayedOptions.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelect;
