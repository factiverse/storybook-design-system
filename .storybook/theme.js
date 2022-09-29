import { create } from '@storybook/theming';
import DesignSystemLogo from '../src/img/DesignSystemLogo.png';

export default create({
  base: 'light',
  brandTitle: 'Factiverse Design System',
  brandUrl:
    'https://factiverse.github.io/storybook-design-system/?path=/story/introduction--page',
  brandImage: DesignSystemLogo,
});
