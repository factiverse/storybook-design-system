import React from 'react';
import { Story, Meta } from '@storybook/react';
import SourceItem from './SourceItem';
export default {
  title: 'Components/SourceItem',
  component: SourceItem,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const defaultClaim = {
  id: '01',
  claim:
    'Viral video of the moon rising in the North Pole is computer generated',
  domain: 'www.reuters.com',
  domainName: 'reuters',
  publishDate: '2022-04-27',
  label: 'Originated As Satire',
  url: 'https://topics.factiverse.no/',
};

const defaultSource = {
  id: '62d7d026b6681913c88d87eb',
  authors: null,
  collection: 'stance_evidence_en',
  doc: null,
  hide: false,
  domain: 'physicsworld.com',
  domainName: 'physicsworld',
  evidenceSnippet: null,
  keywords: null,
  labelDescription: 'Supports',
  predictedLabel: 1,
  publishDate: '2020-07-14 08:50:30',
  searchEngine: 'Google',
  snippet:
    'The rapper, a vocal proponent of, wanted to seek evidence that our planet is a disc, not a globe. His aim was to raise',
  softmaxScore: [0.0426352471113, 0.957364737987],
  title: 'Fighting flat-Earth theory – Physics World',
  url: 'https://physicsworld.com/a/fighting-flat-earth-theory/',
};

const Template: Story = ({ ...args }) => (
  <SourceItem claim={defaultClaim} source={defaultSource} {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  layout: 'centered',
};
