import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '../Button';
import Logo from '../../img/Logo.png';

const defaultLogoSize = { width: 221, height: 72 };
const mobileLogoSize = { width: 180, height: 60 };

export interface HeaderProps {
  appBarColor: 'default' | 'inherit' | 'primary';
  disclaimerEnd?: boolean;
  disclaimerStart?: boolean;
  diclaimerWrapper?: React.ReactElement;
  signInButtons?: React.ReactElement;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const disclaimerText = 'ALPHA V0.1';

const Header = (props: HeaderProps) => {
  const {
    appBarColor = 'inherit',
    disclaimerEnd,
    disclaimerStart,
    diclaimerWrapper,
    signInButtons,
  } = props;
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState<boolean>(false);

  const logoWrapper = (
    <a href={'https://www.factiverse.no/'} target={'_blank'} rel="noreferrer">
      <img
        src={Logo}
        alt="Factiverse Logo"
        width={isMobileSize ? mobileLogoSize.width : defaultLogoSize.width}
        height={isMobileSize ? mobileLogoSize.height : defaultLogoSize.height}
      />
    </a>
  );

  const drawer = (
    <div>
      <SwipeableDrawer
        id="mobileDrawer"
        variant="temporary"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {open === true ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {/* mobile menu content  */}
        <Grid container flexDirection="column" px={3}>
          {signInButtons && (
            <Grid container spacing={2}>
              <Grid item>{signInButtons}</Grid>
            </Grid>
          )}
          {diclaimerWrapper}
        </Grid>
      </SwipeableDrawer>
    </div>
  );

  return (
    <>
      {isMobileSize ? (
        <AppBar
          position="static"
          color={appBarColor}
          sx={{
            backgroundColor: 'whitesmoke',
            border: '1px solid grey',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justifyContent="center">
              {logoWrapper}
            </Grid>
          </Toolbar>
          {drawer}
        </AppBar>
      ) : (
        <AppBar
          position="static"
          color={appBarColor}
          sx={{
            backgroundColor: 'whitesmoke',
            border: '1px solid grey',
            boxShadow: 'none',
          }}
        >
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              {disclaimerStart && diclaimerWrapper}
              <Grid item>{logoWrapper}</Grid>
              <Grid>
                {signInButtons && (
                  <Grid container spacing={2}>
                    <Grid item>{signInButtons}</Grid>
                  </Grid>
                )}
                {disclaimerEnd && diclaimerWrapper}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Header;
