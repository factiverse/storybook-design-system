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
  exampleClaims: [
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
    'Putin warned India to not interfere in Ukraine.',
    '13 border guards stationed on Snake Island have been killed.',
  ],
};

export const smallCheckbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
smallCheckbox.args = {
  exampleClaims: [
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
    'Putin warned India to not interfere in Ukraine.',
  ],
  checkboxSize: 'small',
};

export const ClaimTextStyles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClaimTextStyles.args = {
  exampleClaims: [
    'An American was killed in Ukraine by a mine planted by Russian backed seperatists.',
    'Putin warned India to not interfere in Ukraine.',
  ],
  checkboxSize: 'small',
  claimTextstyle: {
    textTransform: 'uppercase',
    fontSize: '0.85rem',
  },
};
