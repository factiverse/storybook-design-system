import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as DisplayLink } from './DisplayLink.stories';

describe('DisplayLink', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DisplayLink {...DisplayLink.args} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
