import React from 'react';
import { Grid } from '@mui/material';
import Typography from '../Typography';
import Button from '../Button';

export interface ButtonGroupProps {
  /**
   * Is called when one of the buttons is clicked.
   * @param {string} value The label of the clicked buttons
   */
  onClick: (value: string) => void;
  /**
   * Each given string is a button label
   */
  buttons: string[];
  /**
   * The value sets the active button
   */
  value: string;
  startIcon?: JSX.Element;
  typographyVariant?: 'button' | 'body1';
  selectedButtonStyles?: React.CSSProperties;
  unselectedButtonStyles?: React.CSSProperties;
  buttonWithIcon?: string;
}

/**
 * Can be used like 'tabs':
 * One button is selected while the others are deselected.
 * By updating 'value' we can toggle between the buttons.
 *
 * @return {JSX.Element}
 */
const ButtonGroup = ({
  buttons,
  value,
  onClick,
  startIcon,
  typographyVariant = 'button',
  selectedButtonStyles,
  unselectedButtonStyles,
  buttonWithIcon,
}: ButtonGroupProps) => {
  return (
    <Grid container spacing={2} alignItems="center">
      {buttons.map((button, key) => {
        return (
          <Grid key={key} item>
            <Button
              variant="contained"
              onClick={() => onClick(button)}
              color={button === value ? 'secondary' : 'primary'}
              startIcon={button === buttonWithIcon && startIcon}
              sx={
                button === value ? selectedButtonStyles : unselectedButtonStyles
              }
            >
              <Typography fontFamily="DM Mono" variant={typographyVariant}>
                {button}
              </Typography>
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ButtonGroup;
