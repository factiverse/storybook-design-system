import React from 'react';
import { Story, Meta } from '@storybook/react';
import SourceList from './SourceList';
export default {
  title: 'Components/SourceList',
  component: SourceList,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const defaultClaim = {
  id: '1',
  claim:
    'VAERS data does not prove thousands died from receiving COVID-19 ' +
    'vaccines',
  indexInText: 0,
  hide: false,
  score: 60,
  isBeingChecked: false,
  hasBeenChecked: true,
  evidence: [
    {
      id: '11',
      title: 'Viral Posts Misuse VAERS Data to Make False Claims About COVID',
      hide: false,
      snippet:
        'There are very serious side effect from getting the vaccines. So ' +
        'when VAERS says it has received 2,509 reports of death among ' +
        'people who received a COVID-19 vaccine as of March 29, that does ' +
        'not mean that The Vaccine Adverse Event Reporting System is a ' +
        'national early warning system to detect',
      publishDate: '31.03.2021',
      url: 'https://www.factcheck.org/2021/03/scicheck-viral-posts-misuse-vaers-data-to-make-false-claims-about-covid-19-vaccines/',
      domain: 'factcheck.org',
      softmaxScore: [0.33, 0.67],
    },
    {
      id: '12',
      title:
        'Selected Adverse Events Reported after COVID-19 Vaccination | CDC',
      hide: false,
      snippet:
        'Adverse events described on this page have been reported to the ' +
        'Vaccine People who have received the J&J/Janssen COVID-19 Vaccine ' +
        'within Many people have reported only mild side effects after ' +
        'COVID-19 vaccination. Reports of death to VAERS following ' +
        'vaccination do not necessarily mean',
      publishDate: '11.02.2020',
      url: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/adverse-events.html',
      domain: 'cdc.gov',
      softmaxScore: [0.12, 0.88],
    },
  ],
};

const Template: Story = ({ ...args }) => (
  <SourceList claim={defaultClaim} sources={defaultClaim.evidence} {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  layout: 'centered',
};
