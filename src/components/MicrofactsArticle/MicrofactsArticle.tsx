import { Grid, Typography } from '@mui/material';
import React from 'react';
import reactStringReplace from 'react-string-replace';
import MicrofactsTooltip from '../MicrofactsTooltip/MicrofactsTooltip';

export interface MicrofactsArticleProps {
  headline: string;
  image: string;
  inputText: string;
  entities: Array<Entity>;
}

const ReaderView: React.FC<MicrofactsArticleProps> = ({
  headline,
  image,
  inputText,
  entities,
}) => {
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
        .join('|')
        .replace(' ', '\\s') +
      ')',
    'g'
  );

  return (
    <Grid
      container
      direction="column"
      spacing={4}
      alignItems="center"
      className="articleContainer"
    >
      <Grid item>
        <Typography variant="h4">{headline}</Typography>
      </Grid>
      <Grid item>
        <img src={image} alt="headline" width={600} />
      </Grid>
      <Grid item>
        <Typography style={{ whiteSpace: 'pre-line' }}>
          {reactStringReplace(inputText, regex, (match: string, i: number) => (
            <MicrofactsTooltip
              key={match + i}
              microfact={getEntity(match) as Entity}
              keepTooltipInsideId=".articleContainer"
            />
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReaderView;
