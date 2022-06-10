import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button', () => {
  it('should render a button with the class of primary', () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText(/Test Button/)).toBeInTheDocument();
  });
  const mockOnClick = jest.fn();
  it('should trigger onClick when clicked.', () => {
    render(<Button onClick={mockOnClick}>Test Button</Button>);
    // userEvent.click(screen.getByText(/Test Button/));''
    fireEvent.click(screen.getByText(/Test Button/));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
