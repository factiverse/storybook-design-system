import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from './Typography';

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
        options: ['DM Mono', 'Arizona Serif'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Typography>;

export const Stories: ComponentStory<typeof Typography> = (args) => (
  <>
    <Typography variant="h1" {...args}>
      H1
    </Typography>
    <Typography variant="h2" {...args}>
      H2
    </Typography>
    <Typography variant="h3" {...args}>
      H3
    </Typography>
    <Typography variant="h4" {...args}>
      H4
    </Typography>
    <Typography variant="h5" {...args}>
      H5
    </Typography>
    <Typography variant="h6" {...args}>
      H6
    </Typography>
    <Typography variant="subtitle1" {...args}>
      Subtitle 1
    </Typography>
    <Typography variant="subtitle2" {...args}>
      Subtitle 2
    </Typography>
    <Typography variant="body1" {...args}>
      Body 1
    </Typography>
    <Typography variant="body2" {...args}>
      Body 2
    </Typography>
    <Typography variant="caption" {...args}>
      Caption
    </Typography>
    <Typography variant="button" {...args}>
      Button
    </Typography>
    <Typography variant="overline" {...args}>
      Overline
    </Typography>
    <Typography variant="inherit" {...args}>
      Inherit
    </Typography>
    <Typography fontFamily="DM Mono" {...args}>
      DM Mono
    </Typography>
    <Typography fontFamily="Arizona Serif" {...args}>
      Arizona Serif
    </Typography>
    <Typography align="left" {...args}>
      Left
    </Typography>
    <Typography align="center" {...args}>
      Center
    </Typography>
    <Typography align="right" {...args}>
      Right
    </Typography>
    <Typography align="justify" {...args}>
      Justify
    </Typography>
    <Typography paragraph {...args}>
      paragraph
    </Typography>
    <Typography noWrap {...args}>
      noWrap
    </Typography>
    <Typography gutterBottom {...args}>
      gutterBottom
    </Typography>
  </>
);
