import React from 'react';
import { Card, Box, Grid, Typography } from '@material-ui/core';
import reactStringReplace from 'react-string-replace';
import MicrofactsTooltip from '../MicrofactsTooltip/MicrofactsTooltip';
import { Entity } from '../Entity';

export interface MicrofactsArticleProps {
  headline: string;
  image: string;
  inputText: string;
  entities: Array<Entity>;
  updateEntity?: (toReplace: Entity, newEntity: Entity) => void;
}

const ReaderView: React.FC<MicrofactsArticleProps> = ({
  headline,
  image,
  inputText,
  entities,
  updateEntity,
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
    <Card>
      <Box p={2}>
        <Grid container direction="column" spacing={4} alignItems="center">
          <Grid item>
            <Typography variant="h4">{headline}</Typography>
          </Grid>
          <Grid item>
            <img src={image} alt="headline" width={600} />
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
