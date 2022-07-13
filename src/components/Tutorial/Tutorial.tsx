import React, { useState, useEffect } from 'react';
import { Box, MobileStepper, Grid, Modal } from '@mui/material';
// import Popup from 'reactjs-popup';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '../Typography';
import Button from '../Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorialWrapper: {
      maxWidth: 400,
      width: 400,
      flexGrow: 1,
      position: 'relative',
    },
    textWrapper: {
      height: 255,
      padding: theme.spacing(2),
      background: '#FCFCFC',
      borderRadius: 5,
      /* borderTopLeftRadius: 5,
      borderTopRightRadius: 5 */
    },
    firstStep: {
      textAlign: 'center',
      position: 'absolute',
      bottom: 25,
    },
    skipTour: {
      textTransform: 'none',
      width: 'auto',
      '&:hover': {
        background: 'none',
      },
    },
    dot: {
      background: '#f8c608',
    },
  })
);

export interface TutorialProps {
  buttonTitle?: string;
  skipTitle?: string;
  productName: string;
}

const steps = [
  {
    label: 'First step heading',
    description: `first step body text`,
  },
  {
    label: 'second step heading',
    description: `second step body text`,
  },
  {
    label: 'third step heading',
    description: 'third step body text',
  },
  {
    label: 'fourth step heading',
    description: `fourth step body text`,
  },
  {
    label: 'fifth step heading',
    description: `fifth step body text`,
  },
];

const Tutorial = (props: TutorialProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { buttonTitle, skipTitle, productName } = props;
  const [activeStep, setActiveStep] = useState<number>(0);
  const [openTutorial, setOpenTutorial] = useState<boolean>(false);
  const maxSteps = steps.length;

  const firstStep = activeStep === 0;
  const lastStep = activeStep === maxSteps - 1;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStartTutorial = () => {
    setActiveStep(1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(openTutorial);

  useEffect(() => {
    setTimeout(() => {
      setOpenTutorial(true);
    }, 2000);
  }, [setOpenTutorial]);

  return (
    <div style={{ top: '50%', margin: 'auto' }}>
      <Modal
        open={openTutorial}
        onClose={() => setOpenTutorial(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box className={classes.tutorialWrapper}>
          <Box className={classes.textWrapper}>
            <Typography variant="h6">
              {steps[activeStep].description}
            </Typography>
            <Typography variant="subtitle1">
              {steps[activeStep].label}
            </Typography>
          </Box>
          {firstStep || lastStep ? (
            <Grid
              container
              className={classes.firstStep}
              justifyContent="center"
              direction="column"
            >
              <Grid item xs={12}>
                <Button
                  style={{ width: 'auto' }}
                  onClick={
                    firstStep
                      ? handleStartTutorial
                      : () => setOpenTutorial(false)
                  }
                  color="secondary"
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {firstStep
                      ? 'Start a quick tour'
                      : `Explore ${productName}`}
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.skipTour}
                  variant="text"
                  color="inherit"
                >
                  <Typography variant="subtitle2" fontWeight={600}>
                    {firstStep ? 'Skip the tour' : 'Back to the tour'}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <MobileStepper
              // excluding first and second steps
              steps={maxSteps - 2}
              position="static"
              // excluding first step from showing in dots
              activeStep={activeStep - 1}
              classes={{
                dotActive: classes.dot,
              }}
              style={{
                background: '#fcfcfc',
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
              nextButton={
                <Button
                  size="small"
                  color="secondary"
                  onClick={handleNext}
                  // disabled={activeStep === maxSteps}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: 'capitalize' }}
                  >
                    {buttonTitle}
                  </Typography>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  color="primary"
                  size="small"
                  onClick={handleBack}
                  sx={{ textTransform: 'capitalize' }}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  <Typography>{skipTitle}</Typography>
                </Button>
              }
            />
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Tutorial;
