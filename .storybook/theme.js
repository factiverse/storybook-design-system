import { create } from '@storybook/theming';
import DesignSystemLogo from '../src/img/DesignSystemLogo.png';

export default create({
  base: 'light',
  brandTitle: 'Factiverse Design System',
  brandUrl:
    'https://factiverse.github.io/storybook-design-system/?path=/story/base-components-autocomplete--with-data',
  brandImage: DesignSystemLogo,
});
