import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from './TextField';

describe('TextField', () => {
  it('should render a TextField', () => {
    render(<TextField />);
    expect(screen.getByLabelText(/Headline/)).toBeInTheDocument();
  });
});
