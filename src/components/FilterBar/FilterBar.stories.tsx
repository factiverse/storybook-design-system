import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterBar from './FilterBar';

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
  argTypes: {
    filter: {
      defaultValue: {
        supporting: true,
        neutral: false,
        disputing: false,
      },
    },
    countSupporting: {
      defaultValue: 4,
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    countNeutral: {
      defaultValue: 2,
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    countDisputing: {
      defaultValue: 6,
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof FilterBar>;

export const WithState: ComponentStory<typeof FilterBar> = (args) => {
  const [filter, setFilter] = useState({
    supporting: true,
    neutral: false,
    disputing: false,
  });
  return (
    <FilterBar
      filter={filter}
      onUpdateFilter={setFilter}
      countSupporting={args.countSupporting}
      countNeutral={args.countNeutral}
      countDisputing={args.countDisputing}
    />
  );
};
