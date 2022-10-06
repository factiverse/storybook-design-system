import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  it('should render autocomplete component', () => {
    const data = [];
    render(<Autocomplete data={data} id={'1'} />);
    expect(screen.getByLabelText(/Search input/)).toBeInTheDocument();
  });

  it('should suggest sentences.', () => {
    const data = [
      {
        title: 'Russia has no plans to occupy Ukraine.',
        year: 2022,
      },
    ];
    render(<Autocomplete data={data} id={'1'} label="Search input" />);
    userEvent.click(screen.getByLabelText(/Search input/));

    expect(
      screen.getByText('Russia has no plans to occupy Ukraine.')
    ).toBeInTheDocument();
  });
});
