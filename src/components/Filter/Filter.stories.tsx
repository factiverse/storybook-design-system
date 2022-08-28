import React from 'react';
import { Story, Meta } from '@storybook/react';
import FilterBar from './FilterBar';

export default {
  title: 'Components/FilterBar',
  component: FilterBar,
} as Meta;

const Template: Story = ({ ...args }) => (
  <FilterBar filter={[]} updateFilter {...args} />
);

export const Default = Template.bind({});
Default.parameters = {
  layout: 'centered',
};
