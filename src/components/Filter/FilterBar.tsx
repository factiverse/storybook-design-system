import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { Tooltip, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import SupportIcon from '../SupportIcon/SupportIcon';
import { withStyles } from '@mui/styles';

export interface FilterBarProps {
  filter: Array<Filter>;
  updateFilter: (newFilters: Array<Filter>) => void;
  supporting: number;
  balanced: number;
  disputing: number;
}

const CustomToggleButton = withStyles({
  root: {
    padding: 0,
    paddingBottom: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: 120,
    height: 75,
    '& .MuiTypography-root': {
      fontFamily: 'DM Mono',
    },
  },
})(ToggleButton);

const FilterBar: React.FC<FilterBarProps> = ({
  filter,
  updateFilter,
  supporting,
  balanced,
  disputing,
}) => {
  const handleChange = (label: string) => {
    updateFilter(
      filter.map((item) => {
        if (item.label == label) return { ...item, selected: !item.selected };
        return item;
      })
    );
  };

  const total = supporting + balanced + disputing;

  return (
    <>
      {filter != undefined && (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {supporting > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter[0].selected
                    ? 'Click to hide supporting sources'
                    : 'Click to show supporting sources'
                }
              >
                <CustomToggleButton
                  value={'Supporting'}
                  selected={filter[0].selected}
                  onChange={() => handleChange('Supporting')}
                >
                  <SupportIcon
                    variant="supporting"
                    value={supporting != 0 ? (supporting / total) * 100 : 5}
                    label="Supporting"
                    count={supporting}
                  />
                </CustomToggleButton>
              </Tooltip>
            </Grid>
          )}
          {balanced > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter[2].selected
                    ? 'Click to hide neutral sources'
                    : 'Click to show neutral sources'
                }
              >
                <CustomToggleButton
                  value={'Neutral'}
                  selected={filter[2].selected}
                  onChange={() => handleChange('Neutral')}
                >
                  <SupportIcon
                    variant="neutral"
                    value={balanced != 0 ? (balanced / total) * 100 : 5}
                    label="Neutral"
                    count={balanced}
                  />
                </CustomToggleButton>
              </Tooltip>
            </Grid>
          )}
          {disputing > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter[1].selected
                    ? 'Click to hide disputing sources'
                    : 'Click to show disputing sources'
                }
              >
                <CustomToggleButton
                  value={'Disputing'}
                  selected={filter[1].selected}
                  onChange={() => handleChange('Disputing')}
                >
                  <SupportIcon
                    variant="disputing"
                    value={disputing != 0 ? (disputing / total) * 100 : 5}
                    label="Disputing"
                    count={disputing}
                  />
                </CustomToggleButton>
              </Tooltip>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};

export default FilterBar;
