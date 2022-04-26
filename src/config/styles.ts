import { css } from '@storybook/theming';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#e8ebec',
  light: '#f3f5f5',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
  calmBlue: '#E3F3FF',
};

export const color = {
  // Palette
  primary: '#f8c608',
  primaryLight: '#ffe275',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',

  border: 'rgba(0,0,0,0.1)',

  // Status
  supported: '#0ccb58',
  disputed: '#f72525',
  conflicting: '#fecd0c',
  unknown: '#cdd4d7',
};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Arizona Serif", "Georgia", sans-serif',
    secondary: '"DM Mono", monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
  },
  size: {
    s1: 16,
    s2: 21,
    s3: 28,
    m1: 38,
    m2: 50,
    m3: 68,
    l1: 90,
    l2: 120,
    l3: 160,
    code: 38,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;
  &:hover,
  &.__hover {
    border-color: ${rgba(color.primaryLight, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }
  &:active,
  &.__active {
    border-color: ${rgba(color.primaryLight, 1)};
    transform: translate3d(0, 0, 0);
  }
`;

export const zIndex = {
  tooltip: 2147483647,
};
