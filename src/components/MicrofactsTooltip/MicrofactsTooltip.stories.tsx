import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsTooltip from './MicrofactsTooltip';

export default {
  title: 'Components/MicrofactsTooltip',
  component: MicrofactsTooltip,
} as ComponentMeta<typeof MicrofactsTooltip>;

const Template: ComponentStory<typeof MicrofactsTooltip> = (args) => (
  <MicrofactsTooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  entity: {
    description:
      'Nele Neuhaus, født Cornelia Löwenberg, er en svært populær tysk kriminalforfatter, særlig kjent for serien om politietterforskerne Oliver von Bodenstein og Pia Kirchhoff som utspiller seg i Taunus. Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
    entity: 'Nels',
    page_url: 'https://snl.no/Nele_Neuhaus',
    entity_type: 'PER',
    checked: true,
  },
};
