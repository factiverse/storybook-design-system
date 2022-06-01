import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import PasswordField, { defaultPasswordActions } from './PasswordField';

describe('PasswordField component', () => {
  beforeEach(() => {
    render(<PasswordField actions={defaultPasswordActions} />);
  });

  it('should render PasswordField value', () => {
    expect(screen.getByDisplayValue(/passwordValue/i)).toBeInTheDocument();
  });
});
