import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { disclaimerText } from './Header';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header appBarColor="default" disclaimerStart={true} />);
  });

  it('should render logo', () => {
    expect(screen.getByAltText(/factiverse logo/i)).toBeInTheDocument();
  });

  it('should render alpha button', () => {
    expect(screen.getByText(disclaimerText)).toBeInTheDocument();
  });
});
