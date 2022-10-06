import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGroup from './ButtonGroup';

describe('Button Group component', () => {
  beforeEach(() => {
    render(
      <ButtonGroup
        buttons={['All Topics', 'Ukraine', 'COVID-19']}
        value="All Topics"
        onClick={() => console.log('buttonGroup')}
        title="Discover recent fact checks on:"
      />
    );
  });

  it('should render all topics buttons', () => {
    expect(screen.getByText('All Topics')).toBeInTheDocument();
  });

  it('should render ukraine button', () => {
    expect(screen.getByText('Ukraine')).toBeInTheDocument();
  });

  it('should render covid-19 button', () => {
    expect(screen.getByText('COVID-19')).toBeInTheDocument();
  });

  it('should render button group title', () => {
    expect(
      screen.getByText(/discover recent fact checks on/i)
    ).toBeInTheDocument();
  });
});
