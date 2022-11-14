// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import LanguageSelect from './LanguageSelect';
import { LanguageSelectProps } from './LanguageSelect.types';

describe('Test Component', () => {
  let props: LanguageSelectProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<LanguageSelect {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();

    const component = getByTestId('LanguageSelect');

    expect(component).toHaveTextContent('harvey was here');
  });
});
