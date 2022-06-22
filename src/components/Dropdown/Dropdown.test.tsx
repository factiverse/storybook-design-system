import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
