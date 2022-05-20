import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should render a SearchBar with the class of primary', () => {
    render(<SearchBar />);
    expect(screen.getByLabelText(/Headline/)).toBeInTheDocument();
  });
});
