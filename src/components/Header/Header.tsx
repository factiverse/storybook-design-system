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

const defaultLogoSize = { width: 221, height: 72 };
const mobileLogoSize = { width: 160, height: 45 };

export interface HeaderProps {
  logo: string;
  appBarColor: 'default' | 'inherit' | 'primary';
  diclaimerClick: () => void;
  signInClick?: () => void;
  signUpClick?: () => void;
  disclaimerEnd?: boolean;
  disclaimerStart?: boolean;
  withLoginAndSignup?: boolean;
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
  // default logo size is for Topics logo
  const {
    withLoginAndSignup = false,
    logo,
    appBarColor = 'inherit',
    disclaimerEnd,
    disclaimerStart,
    diclaimerClick,
    signInClick,
    signUpClick,
  } = props;
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState<boolean>(false);

  const logoWrapper = (
    <a href={'https://www.factiverse.no/'} target={'_blank'} rel="noreferrer">
      <img
        src={logo}
        alt="Factiverse Logo"
        width={isMobileSize ? mobileLogoSize.width : defaultLogoSize.width}
        height={isMobileSize ? mobileLogoSize.height : defaultLogoSize.height}
      />
    </a>
  );

  const diclaimerWrapper = (
    <Grid item>
      <Button onClick={diclaimerClick}>{disclaimerText}</Button>
    </Grid>
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
          {withLoginAndSignup && signInClick && signUpClick && (
            <Grid container flexDirection="column">
              <Grid mb={1}>
                <Button onClick={signInClick}>sign in</Button>
              </Grid>
              <Grid mb={1}>
                <Button onClick={signUpClick}>sign up for free</Button>
              </Grid>
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
        <AppBar position="fixed" color={appBarColor}>
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
        <AppBar position="static" color={appBarColor}>
          <Toolbar>
            <Grid container alignItems="center" justifyContent="space-between">
              {disclaimerStart && diclaimerWrapper}
              <Grid item>{logoWrapper}</Grid>
              <Grid>
                {withLoginAndSignup && signInClick && signUpClick && (
                  <Grid container flexDirection="row">
                    <Grid mr={2}>
                      <Button onClick={signInClick}>sign in</Button>
                    </Grid>
                    <Grid>
                      <Button onClick={signUpClick}>sign up for free</Button>
                    </Grid>
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
