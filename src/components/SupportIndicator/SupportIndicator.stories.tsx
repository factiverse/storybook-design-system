import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CircularProgressWithLabel } from './awaitLoader';
import SupportIndicatorUpdated from './SupportIndicatorUpdated';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Support Indicator',
  component: SupportIndicatorUpdated,
  parameters: {
    values: [
      { name: 'Supporting', value: 60 },
      { name: 'Balanced', value: 50 },
      { name: 'Disputing', value: 40}
    ]
  }
//   argTypes: {
//   variant: {
//       options: [
// supporting: 60,
// balanced: 50,
// disputing: 40
//       ]
//   }
// }
} as ComponentMeta<typeof SupportIndicatorUpdated>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SupportIndicatorUpdated> = (args) => <SupportIndicatorUpdated {...args} />;

export const Supporting:  ComponentStory<typeof SupportIndicatorUpdated> = (args) => <SupportIndicatorUpdated {... args} />
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Supporting.args = {
  supporting: 60,
  disputing: 10,
  balanced: 10,
  labels: ['supporting'],
};

export const Loader: React.FC = () => (
<CircularProgressWithLabel value={45} />
);




// // export const Balanced = Template.bind({});
// // // More on args: https://storybook.js.org/docs/react/writing-stories/args
// // Balanced.args = {
// //   label: 'Hello world!',
// // };

// // export const Disputing = Template.bind({});
// // // More on args: https://storybook.js.org/docs/react/writing-stories/args
// // Disputing.args = {
// //   label: 'Hello world!',
// };

// tu beda trzy wariacje support indicatora i jeden loader który jest support indicatorem updated
// Vydnuv-1jamxa-jyjget