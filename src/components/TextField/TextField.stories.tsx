import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TextField } from './TextField';
import './TextField.scss'
import { InputAdornment } from '@mui/material';

export default {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
        label: {
            control: {
                type: 'string'
            }
        },
        helperText: {
            control: {
                type: 'string'
            }
        },
        variant: {
            control: {
                options: ["outlined", "standard", "filled"],
                type: 'radio'
            }
        },
        id: {
            control :{ 
                options: ["input-with-icon-textfield","filled-search"],
                type: 'radio'
            }
        },
        focused:{
            control: {type: 'boolean'},
        }
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story= ({...args}) => <TextField {...args} />;

// Default TextField
export const Default = Template.bind({});

// When Focus is set to true
export const Focus = Template.bind({});
Focus.args = {
    focused: true
}

// FullWidth button
export const FullWidth = Template.bind({})
FullWidth.args = { 
    label:"Search field",
    type:"search",
    sx:{width: "100%"}  
}

// Dynamic button
export const Dynamic = Template.bind({})
Dynamic.args = { 
    label:"Search field",
    type:"search",

}

export const WithIcon = () => {
    return (
         <TextField
        id="input-with-icon-textfield"
        label="Headline"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              🔎
            </InputAdornment>
          ),
        }}
      />
    );
  };

export const Variants = () => {
    return (
      <>
        <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <br />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <br />
            <TextField id="standard-basic" label="Standard" variant="standard" />
        </div>
      </>
    );
  };