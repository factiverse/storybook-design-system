import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsTooltip from './MicrofactsTooltip';
import { EntityType } from '../Entity';

const entity = {
  description:
    'Nele Neuhaus, født Cornelia Löwenberg, er en svært populær tysk kriminalforfatter, særlig kjent for serien om politietterforskerne Oliver von Bodenstein og Pia Kirchhoff som utspiller seg i Taunus. Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
  entity: 'Nels',
  page_url: 'https://snl.no/Nele_Neuhaus',
  entity_type: EntityType.PER,
  checked: true,
  keyFact: true,
  domain: 'snl',
  entId: 0,
  score: 1,
  entity_match: false,
  image_url: '"https://media.snl.no/media/35435/Nele_Neuhaus_2016.jpg"',
  image_lic: 'CC BY NC SA 3.0',
  kbId: 'Nele_Neuhaus',
  license: 'begrenset',
};

export default {
  title: 'Components/MicrofactsTooltip',
  component: MicrofactsTooltip,
} as ComponentMeta<typeof MicrofactsTooltip>;

const Template: ComponentStory<typeof MicrofactsTooltip> = (args) => (
  <MicrofactsTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  entity: entity,
  updateEntity: () => console.log('update'),
};
