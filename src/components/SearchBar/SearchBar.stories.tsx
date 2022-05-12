import React from 'react';
import { Story, Meta } from '@storybook/react';
import SearchBar from './SearchBar';
import './SearchBar.scss'

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
    argTypes: {
        color: {
            control: {
                options:  ["primary" , "secondary" , "success" , "error" , "info" , "warning" , undefined],
                type: 'select'
            }
        },
        size: {
            control: {
                options: ["small", "medium", "large"],
                type: 'radio'
            }
        },
        variant: {
            control: {
                options: ["outlined", "standard", "filled"],
                type: 'radio'
            }
        },
        disabled: {
            control: { type: 'boolean' },
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
Default.args = {
    disabled: false,
    focused: false
}

// When Focus is set to true
export const Focus = Template.bind({});
Focus.args = {
    focused: true
}

// FullWidth button
export const FullWidth = Template.bind({})
FullWidth.args = { 
    type:"search", 
}

// Disabled button
export const Disabled = Template.bind({})
Disabled.args = { 
    disabled: true,
    type: "search",
    variant: "outlined",
}

// Dynamic button
export const Dynamic = Template.bind({})
Dynamic.args = { 
    type: "search",
    variant: "outlined",
}

export const WithIcon = () => {
    return (
         <SearchBar variant='outlined' placeholder='Type your own claim to see fact checks, sources and disputes' />
    );
  };
