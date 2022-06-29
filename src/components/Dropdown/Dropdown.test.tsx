import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown component', () => {
  beforeEach(() => {
    render(
      <Dropdown
        label="Choose duration"
        handleChange={() => console.log('handleChange')}
        values={['days', 'months', 'years']}
        defaultValue="days"
      />
    );
  });

  it('should render default value', () => {
    expect(screen.getByText('days')).toBeInTheDocument();
  });

  it('should change value', function () {
    fireEvent.change(screen.getByDisplayValue(/days/i), {
      target: { value: 'days' },
    });

    expect(screen.getByText(/days/i)).toBeInTheDocument();
  });
});
