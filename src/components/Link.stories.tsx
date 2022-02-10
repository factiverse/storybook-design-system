// Copied from https://github.com/storybookjs/design-system

import React from 'react';
import { action } from '@storybook/addon-actions';

import { Icon } from './Icon';
import { Link } from './Link';

const onLinkClick = action('onLinkClick');

export default {
  title: 'Link',
  component: Link,
};

export const Basic: React.FunctionComponent<
  React.ComponentProps<typeof Link>
> = () => (
  <Link href="http://chromatic.com/" newTab inverse={false}>
    link text
  </Link>
);

export const All = () => (
  <>
    <Link href="https://learnstorybook.com" newTab>
      default
    </Link>{' '}
    <Link secondary href="https://learnstorybook.com" newTab>
      secondary
    </Link>{' '}
    <Link tertiary href="https://learnstorybook.com" newTab>
      tertiary
    </Link>{' '}
    <Link nochrome href="https://learnstorybook.com" newTab>
      nochrome
    </Link>{' '}
    <span style={{ background: '#333' }}>
      <Link inverse href="https://learnstorybook.com" newTab>
        inverse
      </Link>
    </span>
  </>
);

export const WithArrow = () => (
  <Link containsIcon withArrow href="https://learnstorybook.com" newTab>
    withArrow shows an arrow behind the link
  </Link>
);

export const ContainsIcon = () => (
  <Link
    containsIcon
    href="https://learnstorybook.com"
    aria-label="Toggle side bar"
    newTab
  >
    <Icon icon="sidebar" aria-hidden />
  </Link>
);

export const WithIcon = () => (
  <Link href="https://learnstorybook.com" newTab>
    <Icon icon="discord" aria-hidden />
    Link with an icon in front
  </Link>
);

export const IsButton = () => (
  /* eslint-disable-next-line */
  <Link isButton onClick={onLinkClick}>
    is actually a button
  </Link>
);
