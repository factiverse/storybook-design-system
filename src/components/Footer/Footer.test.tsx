import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer, { footerText } from './Footer';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render main footer text', () => {
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  it('should open send email link', () => {
    expect(screen.getAllByRole('link')[0].innerHTML).toBe('Send us an email');
  });

  it('should click GDPR link', () => {
    expect(screen.getAllByRole('link')[1].innerHTML).toBe('GDPR notice');
  });

  it('should render copyright', () => {
    expect(screen.getByText(/by Factiverse AS/i)).toBeInTheDocument();
  });
});
