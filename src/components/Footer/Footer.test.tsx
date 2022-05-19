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

  it('should open send email link', async () => {
    userEvent.click(screen.getByRole('link', { name: 'Send us an email' }));
    expect(screen.getByText('Send us an email')).toBeInTheDocument();
  });

  it('should click GDPR link', async () => {
    userEvent.click(screen.getByRole('link', { name: 'GDPR notice' }));
    expect(screen.getByText('GDPR notice')).toBeInTheDocument();
  });

  it('should render copyright', () => {
    expect(screen.getByText(/by Factiverse AS/i)).toBeInTheDocument();
  });
});
