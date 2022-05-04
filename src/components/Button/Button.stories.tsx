// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import Button from './Button';
// import { ButtonProps } from "@mui/material";
// import PropTypes from 'prop-types';

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: 'Components/Button',
//   component: Button,
//   parameters: { actions: { argTypesRegex: '^on.*' } },
//   argTypes: {
//     variant: {
//       options: ["text","contained", "outlined"],
//       control: { type: 'select' },
//     },
//     color: {
//       options: PropTypes.oneOf()
//     }
//   }
// } as Meta;

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template: Story= (args) => <Button {...args} />;
// const Template: Story= (args: ButtonProps) => <Button {...args} />;
// export const Primary = Template.bind({});
// Primary.args = {
//  
//   color:"primary",
//   value:"Primary",
//   variant: undefined
// };

// export const Secondary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Secondary.args = {
//   size:"medium",
//   color:"secondary",
//   variant: undefined,
//   value:"Secondary"
// };

// export const Success = Template.bind({});
// Success.args = {
//   size:"medium",
//   color:"success",
//   variant: undefined,
//   value:"Success"
// };

// export const Error = Template.bind({});
// Error.args = {
//   size:"medium",
//   color:"error",
//   variant: undefined,
//   value:"Error"
// };

// export const Info = Template.bind({});
// Info.args = {
//   size:"medium",
//   color:"info",
//   variant: undefined,
//   value:"Information"
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   size:"medium",
//   color:"warning",
//   variant: undefined,
//   value:"Warning"
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   size:"medium",
//   color:"inherit",
//   variant: undefined,
//   value:"disabled",
//   disabled:true
// }

import React from 'react';
import { Button } from './Button';
import { Story, Meta } from '@storybook/react';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
    },
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta;

const Template: Story= ({...args}) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default',

};

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary',

};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  children: 'Secondary',
  color:"secondary",

};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  color:"success",
};

export const Error = Template.bind({});
Error.args = {
  children:"Error",
  color:"error",
};

export const Info = Template.bind({});
Info.args = {
  children:"Information",
  color:"info",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "warning",
  color: "warning",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "disabled",
  disabled:true
}

export const Sizes = () => {
    return (
      <>
        <div>
          <Button size='large'>Large</Button>
          <Button size='medium'>medium</Button>
          <Button size='small'>Small</Button>
        </div>
      </>
    );
  };