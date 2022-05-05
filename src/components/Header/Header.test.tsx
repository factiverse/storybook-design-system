import React from 'react';
import { render } from '@testing-library/react';
import '@types/jest';
import Button from '../Button';

import Header from './Header';

describe('Header', () => {
  test('renders the Header component', () => {
    render(
      <Header
        logo="https://editor.factiverse.no/79b028bc000a5e47c9a7.png"
        login={<Button label="SIGN IN" />}
        signup={<Button label="SIGN UP FOR FREE" />}
        disclaimer={<Button label="ALPHA V0.1" />}
        appBarColor="default"
        disclaimerStart={true}
        logoWidth="200"
        logoHeight="58"
        mobileLogoWidth="130"
        mobileLogoHeight="35"
      />
    );
  });
});
