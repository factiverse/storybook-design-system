import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import { Tooltip } from '@mui/material';
import { Grid } from '@mui/material';
import SupportIcon from '../SupportIcon/SupportIcon';
import { withStyles } from '@mui/styles';

export interface FilterBarProps {
  filter: Filter;
  onUpdateFilter: (newFilter: Filter) => void;
  countSupporting: number;
  countNeutral: number;
  countDisputing: number;
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
  onUpdateFilter,
  countSupporting,
  countNeutral,
  countDisputing,
}) => {
  const total = countSupporting + countNeutral + countDisputing;

  // TODO: Refactor the filter bar to avoid code duplication
  return (
    <>
      {filter != undefined && (
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {countSupporting > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter.supporting
                    ? 'Click to hide supporting sources'
                    : 'Click to show supporting sources'
                }
              >
                <CustomToggleButton
                  value="supporting"
                  selected={filter.supporting}
                  onChange={() =>
                    onUpdateFilter({
                      ...filter,
                      supporting: !filter.supporting,
                    })
                  }
                >
                  <SupportIcon
                    variant="supporting"
                    value={
                      countSupporting != 0 ? (countSupporting / total) * 100 : 5
                    }
                    label="supporting"
                    count={countSupporting}
                  />
                </CustomToggleButton>
              </Tooltip>
            </Grid>
          )}
          {countNeutral > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter.neutral
                    ? 'Click to hide neutral sources'
                    : 'Click to show neutral sources'
                }
              >
                <CustomToggleButton
                  value="neutral"
                  selected={filter.neutral}
                  onChange={() =>
                    onUpdateFilter({
                      ...filter,
                      neutral: !filter.neutral,
                    })
                  }
                >
                  <SupportIcon
                    variant="neutral"
                    value={countNeutral != 0 ? (countNeutral / total) * 100 : 5}
                    label="neutral"
                    count={countNeutral}
                  />
                </CustomToggleButton>
              </Tooltip>
            </Grid>
          )}
          {countDisputing > 0 && (
            <Grid item xs={4} md="auto">
              <Tooltip
                title={
                  filter.disputing
                    ? 'Click to hide disputing sources'
                    : 'Click to show disputing sources'
                }
              >
                <CustomToggleButton
                  value="disputing"
                  selected={filter.disputing}
                  onChange={() =>
                    onUpdateFilter({
                      ...filter,
                      disputing: !filter.disputing,
                    })
                  }
                >
                  <SupportIcon
                    variant="disputing"
                    value={
                      countDisputing != 0 ? (countDisputing / total) * 100 : 5
                    }
                    label="disputing"
                    count={countDisputing}
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
