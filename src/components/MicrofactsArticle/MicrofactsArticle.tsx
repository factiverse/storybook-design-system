import {
  Card,
  Box,
  Grid,
  Typography,
  ThemeProvider,
  Slider,
  createTheme,
} from '@material-ui/core';
import reactStringReplace from 'react-string-replace';
import { t } from 'i18next';
import React, { ChangeEvent } from 'react';
import MicrofactsTooltip from '../MicrofactsTooltip/MicrofactsTooltip';
import { Entity } from '../Entity';

export interface MicrofactsArticleProps {
  headline: string;
  image: string;
  inputText: string;
  entities: Array<Entity>;
  updateEntity?: (toReplace: Entity, newEntity: Entity) => void;
}

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      root: {
        color: '#444',
      },
      thumb: {
        width: '16px',
        height: '16px',
      },
      track: {
        height: '6px',
      },
      rail: {
        height: '6px',
      },
      mark: {
        height: '10px',
        width: '4px',
        backgroundColor: '#888',
      },
      markActive: {
        height: '10px',
        width: '4px',
        backgroundColor: '#666',
      },
    },
  },
});

const ReaderView: React.FC<MicrofactsArticleProps> = ({
  headline,
  image,
  inputText,
  entities,
  updateEntity,
}) => {
  // The position of the slider to select how many facts should be shown
  const [sliderState, setSliderState] = React.useState(2);

  // Find an entity
  const getEntity = (entity: string) => {
    const found = entities.find((element) => {
      if (element.entity == entity) return true;
    });
    return found;
  };

  // Matches all entities
  const regex = new RegExp(
    '(' +
      entities
        .map((entity) => {
          return entity.entity;
        })
        .join('|'),
    /* .replaceAll(' ', '\\s') + */
    /* ')' */ 'g'
  );

  const handleSliderChange = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event: ChangeEvent<{}>,
    value: number | number[]
  ) => {
    const newValue = value instanceof Array ? value[0] : value;
    switch (newValue) {
      // don't show any microfacts
      case 0: {
        setSliderState(0);
        break;
      }
      // only show key facts
      case 1: {
        setSliderState(1);
        break;
      }
      // show all microfacts
      case 2: {
        setSliderState(2);
        break;
      }
      default: {
        setSliderState(2);
        break;
      }
    }
  };

  // The text description for the key facts slider
  const marks = [
    {
      value: 0,
      label: t('none'),
    },
    {
      value: 1,
      label: t('key'),
    },
    {
      value: 2,
      label: t('all'),
    },
  ];

  return (
    <Card>
      <Box p={2}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4">{headline}</Typography>
          </Grid>
          <Grid item>
            <img src={image} alt="headline" width={600} />
          </Grid>
          <Grid
            item
            container
            id="Slider"
            direction="column"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h6">{t('slider')}</Typography>
            </Grid>
            <Grid item container>
              <ThemeProvider theme={muiTheme}>
                <Slider
                  value={sliderState}
                  marks={marks}
                  min={0}
                  max={2}
                  onChange={handleSliderChange}
                />
              </ThemeProvider>
            </Grid>
          </Grid>
          <Grid item>
            <Typography style={{ whiteSpace: 'pre-line' }}>
              {reactStringReplace(
                inputText,
                regex,
                (match: string, i: number) => (
                  <MicrofactsTooltip
                    key={match + i}
                    entity={getEntity(match) as Entity}
                    updateEntity={
                      updateEntity as (
                        toReplace: Entity,
                        newEntity: Entity
                      ) => void
                    }
                    sliderState={sliderState}
                  />
                )
              )}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ReaderView;
