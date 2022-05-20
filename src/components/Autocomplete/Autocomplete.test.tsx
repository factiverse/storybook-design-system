import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('should render autocomplete component', () => {
    const data = [];
    render(<Autocomplete data={data} id={'1'} />);
    expect(screen.getByLabelText(/Search input/)).toBeInTheDocument();
  });
});
