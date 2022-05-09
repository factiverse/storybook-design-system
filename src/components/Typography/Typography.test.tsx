import React from 'react';
import { render } from '@testing-library/react';

import Typography from './Typography';
import { Default, Paragraph, NoWrap, GutterBottom } from './Typography.stories';

describe('Typography', () => {
  test('renders the Typography component', () => {
    render(<Typography>Hello World</Typography>);
  });
});

describe('H1', () => {
  test('renders variant h1', () => {
    render(<Typography variant="h1">Hello World</Typography>);
  });
});

describe('H2', () => {
  test('renders variant h2', () => {
    render(<Typography variant="h2">Hello World</Typography>);
  });
});

describe('H3', () => {
  test('renders variant h3', () => {
    render(<Typography variant="h3">Hello World</Typography>);
  });
});

describe('H4', () => {
  test('renders variant h4', () => {
    render(<Typography variant="h4">Hello World</Typography>);
  });
});

describe('H5', () => {
  test('renders variant h5', () => {
    render(<Typography variant="h5">Hello World</Typography>);
  });
});

describe('H6', () => {
  test('renders variant h6', () => {
    render(<Typography variant="h6">Hello World</Typography>);
  });
});

describe('body1', () => {
  test('renders variant body1', () => {
    render(<Typography variant="body1">Hello World</Typography>);
  });
});

describe('body2', () => {
  test('renders variant body2', () => {
    render(<Typography variant="body2">Hello World</Typography>);
  });
});

describe('subtitle1', () => {
  test('renders variant subtitle1', () => {
    render(<Typography variant="subtitle1">Hello World</Typography>);
  });
});

describe('subtitle2', () => {
  test('renders variant subtitle2', () => {
    render(<Typography variant="subtitle2">Hello World</Typography>);
  });
});

describe('caption', () => {
  test('renders variant caption', () => {
    render(<Typography variant="caption">Hello World</Typography>);
  });
});

describe('button', () => {
  test('renders variant button', () => {
    render(<Typography variant="button">Hello World</Typography>);
  });
});

describe('overline', () => {
  test('renders variant overline', () => {
    render(<Typography variant="overline">Hello World</Typography>);
  });
});

describe('inherit', () => {
  test('renders variant inherit', () => {
    render(<Typography variant="inherit">Hello World</Typography>);
  });
});

describe('left', () => {
  test('renders align left', () => {
    render(<Typography align="left">Hello World</Typography>);
  });
});

describe('right', () => {
  test('renders align right', () => {
    render(<Typography align="right">Hello World</Typography>);
  });
});

describe('center', () => {
  test('renders align center', () => {
    render(<Typography align="center">Hello World</Typography>);
  });
});

describe('justify', () => {
  test('renders align justify', () => {
    render(<Typography align="justify">Hello World</Typography>);
  });
});

describe('DM Mono', () => {
  test('renders font familt DM Mono', () => {
    render(<Typography fontFamily="DM Mono">Hello World</Typography>);
  });
});

describe('Arizona Serif', () => {
  test('renders font family Arizona Serif', () => {
    render(<Typography fontFamily="Arizona Serif">Hello World</Typography>);
  });
});

describe('Default', () => {
  test('renders font family Default', () => {
    render(<Typography fontFamily="default">Hello World</Typography>);
  });
});

describe('Default', () => {
  test('renders the Typography component', () => {
    render(<Default variant="body2">Hello world!</Default>);
  });
});

describe('Paragraph', () => {
  test('renders the Typography component', () => {
    render(
      <Paragraph paragraph>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </Paragraph>
    );
  });
});

describe('NoWrap', () => {
  test('renders the Typography component', () => {
    render(
      <NoWrap noWrap>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </NoWrap>
    );
  });
});

describe('GutterBottom', () => {
  test('renders the Typography component', () => {
    render(
      <GutterBottom gutterBottom>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </GutterBottom>
    );
  });
});
