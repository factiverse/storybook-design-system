import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToggleButton from './ToggleButton';
import { Grid, Typography } from '@mui/material';

describe('Support Icon component', () => {
  beforeEach(() => {
    render(
      <ToggleButton
        handleChange={() => console.log('toggleButton')}
        selected={false}
        value="toggleButton"
        // eslint-disable-next-line react/no-children-prop
        children={
          <Grid container direction="column" alignItems="center" pt={1}>
            <Grid item>
              <img
                src="https://www.kindpng.com/picc/m/20-209815_google-logo-png-google-icon-download-icons-google.png"
                alt="Google Icon"
                width="38px"
                height="38px"
              />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="black">
                Google
              </Typography>
            </Grid>
          </Grid>
        }
      />
    );
  });

  it('should render toggle button label', () => {
    expect(screen.getByText('Google')).toBeInTheDocument();
  });

  it('should render google icon', () => {
    expect(screen.getByAltText(/google Icon/i)).toBeInTheDocument();
  });
});
