import React from 'react';
import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Button>;

export const Stories: ComponentStory<typeof Button> = (args) => (
  <>
    <Button {...args} color="primary">
      Primary
    </Button>
    <Button {...args} color="secondary">
      Secondary
    </Button>
    <Button {...args} color="success">
      Success
    </Button>
    <Button {...args} color="error">
      Error
    </Button>
    <Button {...args} color="warning">
      Warning
    </Button>
    <Button {...args} color="info">
      Information
    </Button>
    <Button {...args} disabled>
      Disabled
    </Button>
    <Button {...args} size="large">
      Large
    </Button>
    <Button {...args} size="medium">
      Medium
    </Button>
    <Button {...args} size="small">
      Small
    </Button>
  </>
);

// Example for @storybook/addon-links: link from one component to another
export const first = () => (
  <button onClick={linkTo('Components/Button', 'second')}>Go to Second</button>
);
export const second = () => (
  <button onClick={linkTo('Components/Button', 'first')}>Go to First</button>
);
