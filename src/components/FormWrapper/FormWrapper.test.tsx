import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormWrapper from './FormWrapper';

describe('FormWrapper component', () => {
  beforeEach(() => {
    render(
      <FormWrapper
        formName="Login"
        handleSubmit={() => console.log('handleSubmit')}
        loading={false}
      >
        I am child
      </FormWrapper>
    );
  });

  it('should render submit button', () => {
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
