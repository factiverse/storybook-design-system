import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { disclaimerText } from './Header';

describe('Header component', () => {
  beforeEach(() => {
    render(
      <Header
        logo="https://editor.factiverse.no/79b028bc000a5e47c9a7.png"
        appBarColor="default"
        disclaimerStart={true}
        logoWidth="200"
        logoHeight="58"
        mobileLogoWidth="130"
        mobileLogoHeight="35"
      />
    );
  });

  it('should render logo', () => {
    expect(screen.getByAltText(/factiverse logo/i)).toBeInTheDocument();
  });
});
