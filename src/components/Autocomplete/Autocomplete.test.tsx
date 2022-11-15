import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  beforeEach(() => {
    const data = [
      'Russia has no plans to occupy Ukraine.',
      'There are U.S. biolabs in Ukraine funded by the U.S. government.',
    ];
    render(<Autocomplete data={data} label="Search Input" />);
  });

  it('should render autocomplete component', () => {
    const data = [];
    render(<Autocomplete data={data} label="Search input" />);
    expect(screen.getByLabelText('Search input')).toBeInTheDocument();
  });

  it('should suggest sentences.', async () => {
    await userEvent.click(screen.getByLabelText('Search Input'));

    expect(
      screen.getByText('Russia has no plans to occupy Ukraine.')
    ).toBeInTheDocument();
  });

  it('should filter suggestions when typing.', async () => {
    const autocomplete = screen.getByLabelText('Search Input');
    await userEvent.click(autocomplete);

    await userEvent.type(autocomplete, 'bio');

    expect(
      screen.queryByText('Russia has no plans to occupy Ukraine.')
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        'There are U.S. biolabs in Ukraine funded by the U.S. government.'
      )
    ).toBeInTheDocument();
  });
});
