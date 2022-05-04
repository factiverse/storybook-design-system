import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchBar from './SearchBar';
import './SearchBar.scss'
import { InputAdornment } from '@mui/material';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
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

const Template: Story= ({...args}) => <SearchBar {...args} />;

// Default SearchBar
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
    class: "dynamicClass"
}

export const WithIcon = () => {
    return (
         <SearchBar placeholder='placeholder text' />
    );
  };
