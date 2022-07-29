import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import Favicon from './Favicon';

export default {
  title: 'Components/Favicon',
  component: Favicon,
} as Meta;

export const Examples: ComponentStory<typeof Favicon> = () => (
  <>
    <Favicon domain={'physicsworld.com'} />
    <Favicon domain={'bbc.co.uk'} />
    <Favicon domain={'politifact.com'} />
    <Favicon domain={'fullfact.org'} />
  </>
);
