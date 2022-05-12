import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import '@types/jest';

import Claim from './Claim';

const simpleClaim =
  'An American was killed in Ukraine by a mine planted by Russian backed seperatists.';

const claim = {
  claim:
    'Viral video of the moon rising in the North Pole is computer generated',
  domain: 'www.reuters.com',
  domainName: 'reuters',
  publishDate: '2022-04-27',
  label: 'Originated As Satire',
  url: 'https://topics.factiverse.no/',
};

// claim component tests
describe('Claim component', () => {
  beforeEach(() => {
    render(
      <Claim claim={claim} checkClaimClick={() => console.log('check claim')} />
    );
  });

  it('should render check claim button', () => {
    expect(screen.getByText(/check claim/i)).toBeInTheDocument();
  });

  /* it('should render claim title', () => {
    expect(screen.getByText(claim.claim)).toBeInTheDocument();
  }); */

  /* it('should show domain', () => {
    expect(screen.getByText(claim.domain)).toBeInTheDocument();
  }); */

  it('should show domain name', () => {
    expect(screen.getByText(claim.domainName)).toBeInTheDocument();
  });

  /* it('should show label', () => {
    expect(screen.getByLabelText(claim.label)).toBeInTheDocument();
  }); 

  it('should show date', () => {
    expect(screen.getByLabelText(claim.publishDate)).toBeInTheDocument();
  });

  it('domain name should work as a link', () => {
    expect(screen.getByRole(claim.label)).toHaveAttribute('href', claim.domain);
  }); */
});

// simple claim component tests

describe('Simple Claim component', () => {
  test('renders the Simple Claim component', () => {
    render(
      <Claim
        simpleClaim={simpleClaim}
        checkClaimClick={() => console.log('check claim')}
      />
    );
    expect(screen.getByText(simpleClaim)).toBeInTheDocument();
  });
});
