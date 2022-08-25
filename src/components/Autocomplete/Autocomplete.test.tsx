import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('should render autocomplete component', () => {
    const data = [];
    render(<Autocomplete data={data} label="Search Input" />);
    expect(screen.getByLabelText('Search Input')).toBeInTheDocument();
  });

  it('should suggest sentences.', () => {
    const data = [
      'Russia has no plans to occupy Ukraine.',
      'There are U.S. biolabs in Ukraine funded by the U.S. government.',
    ];
    render(<Autocomplete data={data} label="Search Input" />);
    userEvent.click(screen.getByLabelText('Search Input'));

    expect(
      screen.getByText('Russia has no plans to occupy Ukraine.')
    ).toBeInTheDocument();
  });
});
