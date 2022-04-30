import React from 'react';
import { Card, Checkbox, Grid, Typography } from '@mui/material';

export interface ClaimWithCheckboxProps {
  exampleClaims: string[];
  onChange: () => void;
  checkboxSize?: 'small' | 'medium' | undefined;
  claimTextstyle?: React.CSSProperties;
}

const ClaimWithCheckbox = (props: ClaimWithCheckboxProps) => {
  const { exampleClaims, onChange, checkboxSize, claimTextstyle } = props;

  return (
    <Grid>
      <Grid item>
        <Typography>Try one of these trending claims:</Typography>
      </Grid>
      <Grid mt={1}>
        {exampleClaims.map((claim) => {
          return (
            <Grid mb={1}>
              <Card key={claim}>
                <Grid container alignItems="center">
                  <Checkbox onChange={onChange} size={checkboxSize} />
                  <Typography style={claimTextstyle}>{claim}</Typography>
                </Grid>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ClaimWithCheckbox;
