import React from "react";
import { getByRole, render, screen, fireEvent  } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from "./SearchBar";

describe('SearchBar', () => {
  it('should render a SearchBar with the class of primary', () => {
    render(<SearchBar />)
  })

  it('should be disabled', () => {
    render(<SearchBar disabled />)
    const DisabledSearchBar = getByRole('SearchBar', {
      name: /primary/i
    })
    expect(DisabledSearchBar).toBeDisabled()
  })

  it('should render input ', () => {
    const field  = screen.getByTestId('search-text-field').querySelector('input')
    expect(field ).toBeInTheDocument()

    fireEvent.change(field , {target: { value: 'google it'}});
    expect(field.value).toBe('google it');
});

})