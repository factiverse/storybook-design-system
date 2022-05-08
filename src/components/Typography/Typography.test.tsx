import React from 'react';
import { render } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  test('renders the Typography component', () => {
    render(<Typography children="Hello world!" />);
  });
});

describe('Typography variant h1', () => {
  test('renders the Typography component', () => {
    render(<Typography children="Hello world!" variant="h1" />);
  });
});
