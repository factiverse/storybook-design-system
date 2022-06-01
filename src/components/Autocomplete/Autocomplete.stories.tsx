import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import Autocomplete from './Autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    fullWidth: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'string' },
    },
  },
} as Meta;

export const Default = () => {
  return (
    <Autocomplete data={data} id={'icon-test'} label="Search Name" fullWidth />
  );
};

export const data = [
  { title: 'Russia has no plans to occupy Ukraine.', year: 2022 },
  {
    title: 'There are U.S. biolabs in Ukraine funded by the U.S. government.',
    year: 2022,
  },
  { title: 'Putin beheaded bioweapons engineers in Ukraine', year: 2022 },
  {
    title: 'Will Smith slapped Chris Rock to take focus away from Ukraine',
    year: 2022,
  },
  {
    title: 'Ethnic Russians face genocide perpetrated by the Kyiv regime.',
    year: 2022,
  },
  {
    title:
      'Actor Steven Seagal spotted among Russian special forces in Ukraine.',
    year: 2022,
  },
  {
    title: 'NATO is violating an agreement to not expand eastwards.',
    year: 2022,
  },
  {
    title:
      'An American was killed in Ukraine by a mine planted by Russian backed separatists.',
    year: 2022,
  },
  { title: 'Putin warned India to not interfere in Ukraine.', year: 2022 },
  {
    title: '13 border guards stationed on Snake Island have been killed.',
    year: 2022,
  },
  { title: 'Ukraine is not a legitimate nation', year: 2022 },
  { title: 'Russia and Ukraine have a common heritage.', year: 2022 },
  { title: 'Ukraine possesses weapons of mass destruction.', year: 2022 },
  {
    title: 'The Ghost of Kyiv has shot down 10 Russian fighter jets.',
    year: 2022,
  },
  { title: 'The Ukrainian army is pushing back the Russians.', year: 2022 },
];
