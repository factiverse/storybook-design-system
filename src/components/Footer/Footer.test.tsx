import React from 'react';
import { render } from '@testing-library/react';
import '@types/jest';

import Footer from './Footer';

describe('Footer', () => {
  test('renders the Footer component', () => {
    render(<Footer year="2020" />);
  });
});
