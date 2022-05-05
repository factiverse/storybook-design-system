import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export interface FooterProps {
  year: any;
}

const Footer = (props: FooterProps) => {
  const { year } = props;
  return (
    <div>
      <Grid item>
        <Box mt={4}>
          <Typography align="center">
            We are continuously developing our patented AI for different use
            cases and would love to hear from you. If you have any questions or
            want to know more about our services feel free to contact us:
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography align="center">
          <a href={'mailto:tobias@factiverse.no'}>Send us an email</a>
        </Typography>
      </Grid>
      <Grid item>
        <Box mt={2}>
          <Typography align="center">&copy; {year} by Factiverse AS</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box mt={2}>
          <Typography align="center">
            <a href="/GDPR.pdf" download>
              GDPR notice
            </a>
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Footer;
