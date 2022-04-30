import React from 'react';
import { render } from '@testing-library/react';

import ClaimWithCheckbox from './ClaimWithCheckbox';

const exampleClaims = [
  'Russia has no plans to occupy Ukraine.',
  'There are U.S. biolabs in Ukraine funded by the U.S. government.',
  'Putin beheaded bioweapons engineers in Ukraine',
  'Will Smith slapped Chris Rock to take focus away from Ukraine',
  'Ethnic Russians face genocide perpetrated by the Kyiv regime.',
  'Actor Steven Seagal spotted among Russian special forces in Ukraine.',
  'NATO is violating an agreement to not expand eastwards.',
  'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
];

describe('ClaimWithCheckbox', () => {
  test('renders the ClaimWithCheckbox component', () => {
    render(
      <ClaimWithCheckbox
        exampleClaims={exampleClaims}
        onChange={() => console.log('I am onChange')}
      />
    );
  });
});

describe('ClaimTextStyle', () => {
  test('renders the ClaimWithCheckbox component', () => {
    render(
      <ClaimWithCheckbox
        exampleClaims={exampleClaims}
        onChange={() => console.log('I am onChange')}
        claimTextstyle={{ color: 'red' }}
      />
    );
  });
});

describe('CheckboxSize', () => {
  test('renders the ClaimWithCheckbox component', () => {
    render(
      <ClaimWithCheckbox
        exampleClaims={exampleClaims}
        onChange={() => console.log('I am onChange')}
        claimTextstyle={{ color: 'red' }}
        checkboxSize="small"
      />
    );
  });
});
