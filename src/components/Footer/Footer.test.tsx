import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer, { footerText } from './Footer';
import userEvent from '@testing-library/user-event';

describe('Footer component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render main footer text', () => {
    expect(screen.getByText(footerText)).toBeInTheDocument();
  });

  it('should open send email link', () => {
    userEvent.click(screen.getByRole('link', { name: /Send us an email/i }));
    expect(screen.getByText('Send us an email')).toBeInTheDocument();
  });

  it('should click GDPR link', () => {
    userEvent.click(screen.getByRole('link', { name: /GDPR notice/i }));
    expect(screen.getByText('GDPR notice')).toBeInTheDocument();
  });

  it('should render copyright', () => {
    expect(screen.getByText(/by Factiverse AS/i)).toBeInTheDocument();
  });
});
