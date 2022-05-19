import * as React from 'react';
import { getByRole, render  } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from "./Button";
import UserEvent from "@testing-library/user-event";

describe('Button', () => {
  it('should render a button with the class of primary', () => {
    render(<Button />)
  })

  it('should be disabled', () => {
    render(<Button disabled />)
    UserEvent.click(getByRole(screen.getByTestId("country"), "button"));
    const DisabledButton = getByRole('button', {
      name: /primary/i
    })
    expect(DisabledButton).toBeDisabled()
  })

  it('should progress the tutorial', () => {
    render(<Button color="primary" />)
    // userEvent.click(screen.getByLabelText('Quick Guide'));
    UserEvent.click(screen.getByText('Primary'));
    expect(screen.queryByText('Quick Guide!')).toBeNull();
    expect(screen.queryByText('Start the guide')).toBeNull();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

})
