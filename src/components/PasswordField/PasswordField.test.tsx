import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import PasswordField, { defaultPasswordActions } from './PasswordField';

describe('PasswordField component', () => {
  beforeEach(() => {
    render(<PasswordField actions={defaultPasswordActions} />);
  });

  it('should make the password readable.', async () => {
    expect(screen.getByLabelText('visibility')).toBeInTheDocument();
    expect(screen.queryByLabelText('visibilityOff')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('passwordValue')).not.toHaveAttribute(
      'type',
      'text'
    );
    expect(screen.getByDisplayValue('passwordValue')).toHaveAttribute(
      'type',
      'password'
    );
    await userEvent.click(screen.getByLabelText('visibility'));
    expect(screen.queryByLabelText('visibility')).not.toBeInTheDocument();
    expect(screen.getByLabelText('visibilityOff')).toBeInTheDocument();
    expect(screen.getByDisplayValue('passwordValue')).toBeInTheDocument();
    expect(screen.getByDisplayValue('passwordValue')).toHaveAttribute(
      'type',
      'text'
    );
    expect(screen.getByDisplayValue('passwordValue')).not.toHaveAttribute(
      'type',
      'password'
    );
    await userEvent.click(screen.getByLabelText('visibilityOff'));
    expect(screen.getByLabelText('visibility')).toBeInTheDocument();
    expect(screen.queryByLabelText('visibilityOff')).not.toBeInTheDocument();
    expect(screen.getByDisplayValue('passwordValue')).not.toHaveAttribute(
      'type',
      'text'
    );
    expect(screen.getByDisplayValue('passwordValue')).toHaveAttribute(
      'type',
      'password'
    );
  });

  it('should show caps lock warning.', async () => {
    // caps lock warning should not be visible by default
    expect(screen.queryByLabelText('warning')).not.toBeInTheDocument();
    // click the input field to put the focus on it
    await userEvent.click(screen.getByLabelText('Password'));
    await userEvent.keyboard('[CapsLock]');
    expect(screen.getByLabelText('warning')).toBeInTheDocument();
  });

  it('should hide caps lock warning.', async () => {
    expect(screen.queryByLabelText('warning')).not.toBeInTheDocument();
    // click the input field to put the focus on it
    await userEvent.click(screen.getByLabelText('Password'));
    // press caps lock twice to activate and deactivate it
    await userEvent.keyboard('[CapsLock][CapsLock]');
    expect(screen.queryByLabelText('warning')).not.toBeInTheDocument();
  });

  it('should execute handleChange.', async () => {
    const logSpy = jest.spyOn(console, 'log');
    await userEvent.click(screen.getByLabelText('Password'));
    await userEvent.keyboard('a');
    expect(logSpy).toHaveBeenCalledWith('handleChange');
  });
});
