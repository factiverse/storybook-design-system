import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsArticle from './MicrofactsArticle';
import { EntityType } from '../MicrofactsTooltip/MicrofactsTooltip';

/* export const EntityType = {
  PER: 'Person',
  ORG: 'Organization',
  LOC: 'Location',
}; */

const entities = [
  {
    description:
      'Nele Neuhaus, født Cornelia Löwenberg, er en svært populær tysk kriminalforfatter, særlig kjent for serien om politietterforskerne Oliver von Bodenstein og Pia Kirchhoff som utspiller seg i Taunus. Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
    entity: 'Nels',
    page_url: 'https://snl.no/Nele_Neuhaus',
    entity_type: EntityType.PER,
    checked: true,
    keyFact: true,
    domain: 'snl',
    entId: 1,
    score: 20,
    entity_match: true,
    image_url: '',
    image_lic: '',
    kbId: 1,
    license: '',
  },
  {
    description:
      'Nele Neuhausorfatter Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
    entity: 'Liv',
    page_url: 'https://snl.no/Nele_Neuhaus',
    entity_type: EntityType.LOC,
    checked: true,
    keyFact: true,
    domain: 'snl',
    entId: 1,
    score: 20,
    entity_match: true,
    image_url: '',
    image_lic: '',
    kbId: 1,
    license: '',
  },
];

export default {
  title: 'Components/MicrofactsArticle',
  component: MicrofactsArticle,
} as ComponentMeta<typeof MicrofactsArticle>;

const Template: ComponentStory<typeof MicrofactsArticle> = (args) => (
  <MicrofactsArticle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headline: '',
  image: '',
  inputText: '',
  entities: entities,
};
