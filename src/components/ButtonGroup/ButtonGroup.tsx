import React from 'react';
import { Grid } from '@mui/material';
import Typography from '../Typography';
import Button from '../Button';

export interface ButtonGroupProps {
  title?: string;
  onClick: (value: string) => void;
  buttons: string[];
  value: string;
  startIcon?: JSX.Element;
  typographyVariant?: 'button' | 'body1';
  selectedButtonStyles?: React.CSSProperties;
  unselectedButtonStyles?: React.CSSProperties;
  buttonWithIcon?: string;
}

const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    title,
    buttons,
    value,
    onClick,
    startIcon,
    typographyVariant = 'button',
    selectedButtonStyles,
    unselectedButtonStyles,
    buttonWithIcon,
  } = props;

  return (
    <Grid>
      {title && (
        <Grid mb={2}>
          <Typography variant="h5">{title}</Typography>
        </Grid>
      )}
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
                  button === value
                    ? selectedButtonStyles
                    : unselectedButtonStyles
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
    </Grid>
  );
};

export default ButtonGroup;
