import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from './Typography';

describe('Typography', () => {
  test('renders the Typography component', () => {
    render(<Typography />);
    expect(screen.getByText(/Hello World/)).toBeInTheDocument();
  });
});
