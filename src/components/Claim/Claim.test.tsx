import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Claim, { defaultClaim } from './Claim';

const simpleClaim =
  'An American was killed in Ukraine by a mine planted by Russian backed seperatists.';

// claim component tests
describe('Claim component', () => {
  beforeEach(() => {
    render(
      <Claim
        claim={defaultClaim}
        checkClaimClick={() => console.log('check claim')}
      />
    );
  });

  it('should render check claim button', () => {
    expect(screen.getByText(/check claim/i)).toBeInTheDocument();
  });

  it('should render claim title', () => {
    expect(screen.getByText(defaultClaim.claim)).toBeInTheDocument();
  });

  it('should show domain', () => {
    expect(
      screen.getByAltText(`favicon ${defaultClaim.domain}`)
    ).toBeInTheDocument();
  });

  it('should show domain name', () => {
    expect(screen.getByText(defaultClaim.domainName)).toBeInTheDocument();
  });

  it('should show label', () => {
    expect(screen.getByText(`${defaultClaim.label}:`)).toBeInTheDocument();
  });

  it('should show date', () => {
    expect(screen.getByText(defaultClaim.publishDate)).toBeInTheDocument();
  });
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
