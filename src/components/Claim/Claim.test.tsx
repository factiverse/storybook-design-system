import React from 'react';
import { render } from '@testing-library/react';
import '@types/jest';

import Claim from './Claim';

const claim = {
  claim:
    'Viral video of the moon rising in the North Pole is computer generated',
  domain: 'https://www.reuters.com/favicon.ico',
  domainName: 'reuters',
  publishDate: '2022-04-27',
  label: 'Originated As Satire',
};

describe('Claim', () => {
  test('renders the Claim component', () => {
    render(
      <Claim
        claim={claim}
        checkClaimClick={() => console.log('Check Claim is clicked')}
      />
    );
  });
});

describe('Simple Claim', () => {
  test('renders the Simple Claim component', () => {
    render(
      <Claim
        simpleClaim="Putin warned India to not interfere in Ukraine."
        checkClaimClick={() => console.log('Check Claim is clicked')}
      />
    );
  });
});
