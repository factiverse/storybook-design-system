import React from 'react';
import { Story, Meta } from '@storybook/react';
import Favicon from './Favicon';

export default {
  title: 'Components/Favicon',
  component: Favicon,
} as Meta;

const Template: Story = ({ ...args }) => (
  <Favicon
    displayLink={source.domain ?? ''}
    variant="circleWrapped"
    {...args}
  />
);

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

const source = defaultSource;

export const Default = Template.bind({});

export const SquareWrapper = Template.bind({});
SquareWrapper.args = {
  variant: 'squareWrapped',
};
