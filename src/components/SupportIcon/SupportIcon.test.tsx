import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SupportIcon from './SupportIcon';

describe('Support Icon component', () => {
  beforeEach(() => {
    render(
      <SupportIcon variant="neutral" value={30} label="Neutral" count={4} />
    );
  });

  it('should render support icon label', () => {
    expect(screen.getByText('Neutral')).toBeInTheDocument();
  });

  it('should render support icon neutral variant', () => {
    expect(screen.getByTestId('linearProgressBar')).toHaveStyle(
      `background-color: rgb(248, 199, 158);`
    );
  });
});
