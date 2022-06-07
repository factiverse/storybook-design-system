import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PasswordField, { defaultPasswordActions } from './PasswordField';

describe('PasswordField component', () => {
  beforeEach(() => {
    render(<PasswordField actions={defaultPasswordActions} />);
  });

  it('should render Password eye icon hide and show', () => {
    expect(screen.getByLabelText('visibility')).toBeInTheDocument();
    expect(screen.queryByLabelText('visibilityOff')).not.toBeInTheDocument();
  });

  it('should render Password caps lock warning', async () => {
    expect(screen.queryByLabelText('warning')).not.toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Password'));
    await userEvent.keyboard('[CapsLock]');
    expect(screen.getByLabelText('warning')).toBeInTheDocument();
  });
});
