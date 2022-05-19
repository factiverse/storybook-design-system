import React from "react";
import { getByRole, render  } from '@testing-library/react'
import '@testing-library/jest-dom'
import TextField from "./TextField";

describe('TextField', () => {
  it('should render a TextField with the class of primary', () => {
    render(<TextField />)
  })

  it('should be disabled', () => {
    render(<TextField disabled />)
    const DisabledTextField = getByRole('TextField', {
      name: /primary/i
    })
    expect(DisabledTextField).toBeDisabled()
  })

})