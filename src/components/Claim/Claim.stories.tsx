import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Claim from './Claim';

export default {
  title: 'Components/Claim',
  component: Claim,
} as ComponentMeta<typeof Claim>;

const Template: ComponentStory<typeof Claim> = (args) => <Claim {...args} />;

export const Default = Template.bind({});
Default.args = {
  claim: {
    claim:
      'Viral video of the moon rising in the North Pole is computer generated',
    domain: 'www.reuters.com',
    domainName: 'reuters',
    publishDate: '2022-04-27',
    label: 'Originated As Satire',
    url: 'https://topics.factiverse.no/',
  },
};

export const SimpleClaim = Template.bind({});
SimpleClaim.args = {
  simpleClaim: 'Putin warned India to not interfere in Ukraine.',
};

export const SimpleClaimWithStyles = Template.bind({});
SimpleClaimWithStyles.args = {
  simpleClaim:
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
  simpleClaimTypographyStyles: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
  },
};

export const LongClaimTitle = Template.bind({});
LongClaimTitle.args = {
  claim: {
    claim:
      'A high school in Indiana sent out an email informing teachers of a new “otherkin policy” to accommodate students who identify as part animal.',
    domain: 'www.snopes.com',
    domainName: 'snopes',
    publishDate: '2022-04-27',
    label: 'False',
    url: 'https://topics.factiverse.no/',
  },
};
