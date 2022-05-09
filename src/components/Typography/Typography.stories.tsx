import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';
import { Grid } from '@mui/material';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: 'element',
        require: true,
      },
    },
    variant: {
      control: {
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'subtitle1',
          'subtitle2',
          'body1',
          'body2',
          'caption',
          'button',
          'overline',
          'inherit',
        ],
        type: 'radio',
      },
    },
    align: {
      control: {
        type: 'radio',
      },
    },
    gutterBottom: {
      control: { type: 'boolean' },
    },
    noWrap: {
      control: { type: 'boolean' },
    },
    paragraph: {
      control: { type: 'boolean' },
    },
    fontFamily: {
      control: {
        options: ['DM Mono', 'Arizona Serif', 'default'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

const MultipleTemplates: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography {...args} />
    <Typography {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello world!',
  variant: 'body2',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  paragraph: true,
};

export const NoWrap = Template.bind({});
NoWrap.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  noWrap: true,
};

export const GutterBottom = MultipleTemplates.bind({});
GutterBottom.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  gutterBottom: true,
};

export const Headings: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant="h1">H1</Typography>
    <Typography variant="h2">H2</Typography>
    <Typography variant="h3">H3</Typography>
    <Typography variant="h4">H4</Typography>
    <Typography variant="h5">H5</Typography>
    <Typography variant="h6">H6</Typography>
  </>
);

export const Subtitles: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant="subtitle1">Subtitle 1</Typography>
    <Typography variant="subtitle2">Subtitle 2</Typography>
  </>
);

export const BodySizes: ComponentStory<typeof Typography> = () => (
  <>
    <Typography variant="body1">Body 1</Typography>
    <Typography variant="body2">Body 2</Typography>
  </>
);

export const OtherSizes: ComponentStory<typeof Typography> = () => (
  <Grid container flexDirection="column">
    <Typography variant="caption">Caption</Typography>
    <Typography variant="button">Button</Typography>
    <Typography variant="overline">Overline</Typography>
    <Typography variant="inherit">Inherit</Typography>
  </Grid>
);

export const FontFamilies: ComponentStory<typeof Typography> = () => (
  <Grid container flexDirection="column">
    <Typography fontFamily="DM Mono">DM Mono</Typography>
    <Typography fontFamily="Arizona Serif">Arizona Serif</Typography>
    <Typography fontFamily="default">Default</Typography>
  </Grid>
);

export const Align: ComponentStory<typeof Typography> = () => (
  <Grid container flexDirection="column">
    <Typography align="left">Left</Typography>
    <Typography align="center">Center</Typography>
    <Typography align="right">Right</Typography>
    <Typography align="justify">Justify</Typography>
  </Grid>
);
