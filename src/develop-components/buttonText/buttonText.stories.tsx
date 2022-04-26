import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonText, { ButtonProps } from '.';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';

export default {
  title: 'Development-Components/Button',
  component: ButtonText,
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonText {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Button'
}

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger Button',
  type: 'danger',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  type: 'ghost',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  type: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'ButtonText',
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: DownloadIcon,
  children: 'Download',
};

const ButtonRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <ButtonRow>
        <ButtonText size='large'>Large</ButtonText>
        <ButtonText size='default'>Default</ButtonText>
        <ButtonText size='small'>Small</ButtonText>
      </ButtonRow>
      <ButtonRow>
        <ButtonText type='danger' size='large'>Large</ButtonText>
        <ButtonText type='danger' size='default'>Default</ButtonText>
        <ButtonText type='danger' size='small'>Small</ButtonText>
      </ButtonRow>
      <ButtonRow>
        <ButtonText type='ghost' size='large'>Large</ButtonText>
        <ButtonText type='ghost' size='default'>Default</ButtonText>
        <ButtonText type='ghost' size='small'>Small</ButtonText>
      </ButtonRow>
      <ButtonRow>
        <ButtonText type='secondary' size='large'>Large</ButtonText>
        <ButtonText type='secondary' size='default'>Default</ButtonText>
        <ButtonText type='secondary' size='small'>Small</ButtonText>
      </ButtonRow>
      <ButtonRow>
        <ButtonText loading disabled size='large'>Large</ButtonText>
        <ButtonText loading disabled size='default'>Default</ButtonText>
        <ButtonText loading disabled size='small'>Small</ButtonText>
      </ButtonRow>
    </>
  );
};