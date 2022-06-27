import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsTooltip, { EntityType } from './MicrofactsTooltip';

const entity = {
  description:
    'Nele Neuhaus, født Cornelia Löwenberg, er en svært populær tysk kriminalforfatter, særlig kjent for serien om politietterforskerne Oliver von Bodenstein og Pia Kirchhoff som utspiller seg i Taunus. Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
  entity: 'Nels',
  page_url: 'https://snl.no/Nele_Neuhaus',
  entity_type: EntityType.PER,
  checked: true,
  keyFact: true,
  domain: 'snl',
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
  sliderState: 1,
};
