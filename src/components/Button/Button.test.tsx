import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('should render a button with the class of primary', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText(/Test Button/)).toBeInTheDocument();
  });
});
