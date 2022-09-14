import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButtons from './RadioButtons';

describe('Radio Buttons component', () => {
  beforeEach(() => {
    render(
      <RadioButtons
        title="Credibility"
        radioButtons={['High to low', 'Low to high']}
        defaultValue="High to low"
      />
    );
  });

  it('should render Radio Buttons title', () => {
    expect(screen.getByText('Credibility')).toBeInTheDocument();
  });

  it('should render High to low radio button', () => {
    expect(screen.getByText('High to low')).toBeInTheDocument();
  });

  it('should render Low to high radio button', () => {
    expect(screen.getByText('Low to high')).toBeInTheDocument();
  });
});
