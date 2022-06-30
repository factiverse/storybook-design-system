import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxGroup from './CheckboxGroup';

describe('Checkbox Group component', () => {
  beforeEach(() => {
    render(
      <CheckboxGroup
        checkboxes={['Supported', 'Unsupported', 'Academia']}
        checkedValues={['Supported', 'Unsupported']}
        handleChange={() => console.log('change checkboxes')}
        title="Sources"
        helperText="Please accept our terms and conditons"
      />
    );
  });

  it('should render Supported checkbox', () => {
    expect(screen.getByText('Supported')).toBeInTheDocument();
  });

  it('should render Unsupported checkbox', () => {
    expect(screen.getByText('Unsupported')).toBeInTheDocument();
  });

  it('should render Academia checkbox', () => {
    expect(screen.getByText('Academia')).toBeInTheDocument();
  });

  it('should render checkbox group title', () => {
    expect(screen.getByText('Sources')).toBeInTheDocument();
  });

  it('should render checkbox helper text', () => {
    expect(
      screen.getByText('Please accept our terms and conditons')
    ).toBeInTheDocument();
  });
});
