import React from 'react';
import { render } from '@testing-library/react';

import Claim from './Claim';

const claim = {
  claim:
    'Viral video of the moon rising in the North Pole is computer generated',
  domain: 'https://www.reuters.com/favicon.ico',
  domainName: 'reuters',
  publishDate: '2022-04-27',
  label: 'Originated As Satire',
};

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Claim claim={claim} />);
  });
});
