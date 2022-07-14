import React, { useState, useEffect } from 'react';
import { Box, MobileStepper, Grid, Modal } from '@mui/material';
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '../Typography';
import Button from '../Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import classnames from 'classnames';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorialWrapper: {
      top: '50%',
      margin: 'auto',
    },
    tutorialBody: {
      maxWidth: 400,
      width: 400,
      flexGrow: 1,
      position: 'relative',
    },
    textWrapper: {
      height: 255,
      padding: theme.spacing(3),
      background: '#FCFCFC',
    },
    textWrapperRadius: {
      borderRadius: 5,
    },
    textWrapperStepRadius: {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    firstStep: {
      background: '#FCFCFC',
      textAlign: 'center',
      marginTop: '-15px',
      borderRadius: 5,
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
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stepper: {
      background: '#fcfcfc',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
  })
);

export interface TutorialProps {
  productName: string;
  steps: { label: string; description: string }[];
}

const Tutorial = (props: TutorialProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const { productName, steps } = props;
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

  useEffect(() => {
    setTimeout(() => {
      setOpenTutorial(true);
    }, 2000);
  }, [setOpenTutorial]);

  const TutorialBody = () => {
    return (
      <Box
        className={
          firstStep || lastStep
            ? classnames(classes.textWrapperRadius, classes.textWrapper)
            : classnames(classes.textWrapperStepRadius, classes.textWrapper)
        }
      >
        <Typography variant="h6">{steps[activeStep].description}</Typography>
        <Typography variant="subtitle1">{steps[activeStep].label}</Typography>
      </Box>
    );
  };

  const FirstLastStepper = () => {
    return (
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
              firstStep ? handleStartTutorial : () => setOpenTutorial(false)
            }
            color="secondary"
          >
            <Typography variant="subtitle2" fontWeight={600}>
              {firstStep ? 'Start a quick tour' : `Explore ${productName}`}
            </Typography>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.skipTour}
            variant="text"
            color="inherit"
            onClick={firstStep ? () => setOpenTutorial(false) : handleBack}
          >
            <Typography variant="subtitle2" fontWeight={600}>
              {firstStep ? 'Skip the tour' : 'Back to the tour'}
            </Typography>
          </Button>
        </Grid>
      </Grid>
    );
  };

  const BodyStepper = () => {
    return (
      <MobileStepper
        // excluding first and second steps
        steps={maxSteps - 2}
        position="static"
        // excluding first step from showing in dots
        activeStep={activeStep - 1}
        classes={{
          dotActive: classes.dot,
        }}
        className={classes.stepper}
        nextButton={
          <Button size="small" color="secondary" onClick={handleNext}>
            <Typography
              variant="subtitle1"
              sx={{ textTransform: 'capitalize' }}
            >
              Next
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
            <Typography>Back</Typography>
          </Button>
        }
      />
    );
  };

  return (
    <div className={classes.tutorialWrapper}>
      <Modal
        open={openTutorial}
        onClose={() => setOpenTutorial(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
        className={classes.modal}
        closeAfterTransition
        disableAutoFocus
      >
        <Box className={classes.tutorialBody}>
          <TutorialBody />
          {firstStep || lastStep ? <FirstLastStepper /> : <BodyStepper />}
        </Box>
      </Modal>
    </div>
  );
};

export default Tutorial;
