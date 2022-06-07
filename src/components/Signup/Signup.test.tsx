import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Signup from './Signup';

describe('Signup form', () => {
  it('should submit the signup form', async () => {
    const handleSubmit = jest.fn();
    render(
      <Signup
        // schemaSignup={defaultSignupActions.schemaSignup}
        handleSignup={handleSubmit}
        loading={false}
        message={''}
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
      />
    );

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), 'John');
    await user.type(screen.getByLabelText(/email/i), 'john.smith@whatever.com');
    await user.type(screen.getByLabelText(/^password$/i), 'whatever');

    await user.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'John',
        email: 'john.smith@whatever.com',
        password: 'whatever',
      })
    );
  });
});
