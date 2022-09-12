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
import logo from '../../img/Logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tutorialWrapper: {
      top: '50%',
    },
    tutorialBody: {
      flexGrow: 1,
      position: 'relative',
    },
    tutorialBodyFirstLast: {
      width: 400,
    },
    tutorialBodyMiddle: {
      width: 330,
    },
    textWrapper: {
      height: 255,
      padding: theme.spacing(3),
      background: '#FCFCFC',
      textAlign: 'center',
    },
    textWrapperRadius: {
      borderRadius: 5,
    },
    textWrapperStepRadius: {
      borderTopLeftRadius: 5,
    },
    firstStep: {
      background: '#FCFCFC',
      textAlign: 'center',
      marginTop: '-23px',
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
    },
    imageFieldBox: {
      width: '330px',
      height: '351px',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    startTutorialButton: {
      width: 'auto',
      fontWeight: 600,
    },
    imageFieldImageStyles: {
      width: 'inherit',
      height: 'inherit',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  })
);

export interface TutorialProps {
  productName: string;
  steps: { label: string; description: string; imageUrl?: string }[];
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

  const firstOrLastCheck = firstStep || lastStep;

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
          firstOrLastCheck
            ? classnames(classes.textWrapperRadius, classes.textWrapper)
            : classnames(classes.textWrapperStepRadius, classes.textWrapper)
        }
      >
        {firstStep && <img width="180px" src={logo} alt="logo" />}
        <Grid mt={!firstOrLastCheck ? 5 : 0}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
          >
            {steps[activeStep].label}
          </Typography>
          <Typography variant="subtitle1" textAlign="center" sx={{ mt: 2 }}>
            {steps[activeStep].description}
          </Typography>
        </Grid>
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
            className={classes.startTutorialButton}
            onClick={
              firstStep ? handleStartTutorial : () => setOpenTutorial(false)
            }
            color="secondary"
          >
            {firstStep ? 'Start a quick tour' : `Explore ${productName}`}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.skipTour}
            variant="text"
            color="inherit"
            onClick={firstStep ? () => setOpenTutorial(false) : handleBack}
          >
            {firstStep ? 'Skip the tour' : 'Back to the tour'}
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
          <Button
            size="small"
            color="secondary"
            onClick={handleNext}
            sx={{ fontWeight: 600 }}
          >
            Next
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
            sx={{ fontWeight: 600 }}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    );
  };

  const ImageField = () => {
    return (
      <Box className={classes.imageFieldBox}>
        <img
          src={steps[activeStep].imageUrl}
          className={classes.imageFieldImageStyles}
        />
      </Box>
    );
  };

  return (
    <Grid m={'auto'} className={classes.tutorialWrapper}>
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
        <Grid container sx={{ width: 'auto' }}>
          <Box
            className={
              firstOrLastCheck
                ? classnames(
                    classes.tutorialBodyFirstLast,
                    classes.tutorialBody
                  )
                : classnames(classes.tutorialBodyMiddle, classes.tutorialBody)
            }
          >
            <TutorialBody />
            {firstOrLastCheck ? <FirstLastStepper /> : <BodyStepper />}
          </Box>
          {!firstOrLastCheck && <ImageField />}
        </Grid>
      </Modal>
    </Grid>
  );
};

export default Tutorial;
