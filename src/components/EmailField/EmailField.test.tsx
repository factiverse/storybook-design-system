import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import EmailField, { defaultEmailActions } from './EmailField';

describe('EmailField component', () => {
  beforeEach(() => {
    render(<EmailField actions={defaultEmailActions} />);
  });

  it('should render EmailField value', () => {
    expect(
      screen.getByDisplayValue(defaultEmailActions?.values)
    ).toBeInTheDocument();
  });
});
