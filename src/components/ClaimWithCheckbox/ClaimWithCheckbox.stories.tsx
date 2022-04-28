import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ClaimWithCheckbox from './ClaimWithCheckbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ClaimWithCheckbox',
  component: ClaimWithCheckbox,
} as ComponentMeta<typeof ClaimWithCheckbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClaimWithCheckbox> = (args) => (
  <ClaimWithCheckbox {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'It is too late to stop climate change.',
};
