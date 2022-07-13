import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Grid } from '@mui/material';
import Tutorial from './Tutorial';

export default {
  title: 'Components/Tutorial',
  component: Tutorial,
  argTypes: {
    children: {
      control: {
        type: 'children',
      },
    },
  },
} as ComponentMeta<typeof Tutorial>;

const Template: ComponentStory<typeof Tutorial> = (args) => (
  <Tutorial {...args} />
);

export const Default = Template.bind({});
Default.args = {
  /* heading: 'Welcome to Factiverse!',
  subheading: ' A universe where facts matter',
  text: 'We are here to give you an overview of the most credible information on all sides of a given topic, claim or article.', */
  buttonTitle: 'Next',
  skipTitle: 'Back',
  productName: 'Editor',
};

export const Main = () => {
  return (
    <Grid>
      <Tutorial buttonTitle="Next" skipTitle="Back" productName="Editor" />
    </Grid>
  );
};
