import React from 'react';
import { AppBar, Grid, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

export interface HeaderProps {
  disclaimer: JSX.Element;
  login?: JSX.Element;
  signup?: JSX.Element;
  logo: string;
  appBarColor: 'default' | 'inherit' | 'primary';
  disclaimerEnd?: boolean;
  disclaimerStart?: boolean;
  logoWidth: string;
  logoHeight: string;
  mobileLogoWidth?: string;
  mobileLogoHeight?: string;
}

const Header = (props: HeaderProps) => {
  const {
    disclaimer,
    login,
    signup,
    logo,
    appBarColor,
    disclaimerEnd,
    disclaimerStart,
    logoWidth,
    logoHeight,
    mobileLogoWidth,
    mobileLogoHeight,
  } = props;
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" className={'HeaderBar'} color={appBarColor}>
      <Toolbar>
        <Grid
          container
          alignItems="center"
          justifyContent={isMobileSize ? 'space-evenly' : 'space-between'}
        >
          {disclaimerStart && <Grid item>{disclaimer}</Grid>}
          <Grid item>
            <a
              href={'https://www.factiverse.no/'}
              target={'_blank'}
              rel="noreferrer"
            >
              <img
                src={logo}
                alt="Factiverse Logo"
                width={isMobileSize ? mobileLogoWidth : logoWidth}
                height={isMobileSize ? mobileLogoHeight : logoHeight}
              />
            </a>
          </Grid>
          <Grid item>
            {login && signup && (
              <Grid container spacing={2}>
                <Grid item>{login}</Grid>
                {signup && <Grid item>{signup}</Grid>}
              </Grid>
            )}
            {disclaimerEnd && <Grid item>{disclaimer}</Grid>}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
