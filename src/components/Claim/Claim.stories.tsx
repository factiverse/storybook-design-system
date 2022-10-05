import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Claim from './Claim';

export default {
  title: 'Fact Checking/Claim',
  component: Claim,
  argTypes: {
    simpleClaimVariant: {
      control: {
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'button',
          'overline',
          'inherit',
        ],
        type: 'radio',
      },
    },
  },
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

export const SimpleClaimTopics = Template.bind({});
SimpleClaimTopics.args = {
  simpleClaim: 'Russia and Ukraine have a common heritage.',
  simpleClaimStyles: {
    fontFamily: 'DM Mono',
  },
};

export const SimpleClaimEditor = Template.bind({});
SimpleClaimEditor.args = {
  simpleClaim: 'Putin warned India to not interfere in Ukraine.',
  simpleClaimVariant: 'button',
  simpleClaimStyles: {
    fontSize: '0.75rem',
  },
};

export const SimpleClaimWithStyles = Template.bind({});
SimpleClaimWithStyles.args = {
  simpleClaim:
    'Homemade baby formula recipes offer a ‘viable option’ during U.S. shortage.',
  simpleClaimStyles: {
    textTransform: 'lowercase',
    letterSpacing: '0.02857em',
    color: 'blue',
    fontWeight: 600,
  },
};

export const ShortClaimTitle = Template.bind({});
ShortClaimTitle.args = {
  claim: {
    claim: 'Photo shows Sri Lankan PM fleeing after resignation',
    domain: 'www.afp.com',
    domainName: 'afp',
    publishDate: '2022-05-14',
    label: 'Misleading',
    url: 'https://topics.factiverse.no/',
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
