import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
import UserEvent from '@testing-library/user-event';

describe('Button', () => {
  it('should render a button with the class of primary', () => {
    render(<Button />);
  });
});
