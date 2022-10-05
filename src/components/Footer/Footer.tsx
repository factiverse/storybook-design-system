import React from 'react';
import { Box, Grid } from '@mui/material';
import Typography from '../Typography';

export interface FooterProps {
  text: string;
  year: string;
}

export const footerText =
  'We are continuously developing our patented AI for different use cases and would love to hear from you. If you have any questions or want to know more about our services feel free to contact us:';

const Footer = (props: FooterProps) => {
  const { text = footerText } = props;
  return (
    <div>
      <Grid item>
        <Box mt={4}>
          <Typography align="center">{text}</Typography>
        </Box>
      </Grid>
      <Grid item>
        <Typography align="center">
          <a href={'mailto:info@factiverse.no'}>Send us an email</a>
        </Typography>
      </Grid>
      <Grid item>
        <Box mt={1}>
          <Typography align="center">
            &copy; {new Date().getFullYear()} by Factiverse AS
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Box mt={1}>
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
