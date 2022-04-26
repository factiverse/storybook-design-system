import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ButtonTest, { ButtonProps } from '.';
import styled from 'styled-components';
import DownloadIcon from '../../icons/Download';

export default {
  title: 'Development-Components/Button',
  component: ButtonTest,
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonTest {...args} />;

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
  children: 'ButtonTest',
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
        <ButtonTest size='large'>Large</ButtonTest>
        <ButtonTest size='default'>Default</ButtonTest>
        <ButtonTest size='small'>Small</ButtonTest>
      </ButtonRow>
      <ButtonRow>
        <ButtonTest type='danger' size='large'>Large</ButtonTest>
        <ButtonTest type='danger' size='default'>Default</ButtonTest>
        <ButtonTest type='danger' size='small'>Small</ButtonTest>
      </ButtonRow>
      <ButtonRow>
        <ButtonTest type='ghost' size='large'>Large</ButtonTest>
        <ButtonTest type='ghost' size='default'>Default</ButtonTest>
        <ButtonTest type='ghost' size='small'>Small</ButtonTest>
      </ButtonRow>
      <ButtonRow>
        <ButtonTest type='secondary' size='large'>Large</ButtonTest>
        <ButtonTest type='secondary' size='default'>Default</ButtonTest>
        <ButtonTest type='secondary' size='small'>Small</ButtonTest>
      </ButtonRow>
      <ButtonRow>
        <ButtonTest loading disabled size='large'>Large</ButtonTest>
        <ButtonTest loading disabled size='default'>Default</ButtonTest>
        <ButtonTest loading disabled size='small'>Small</ButtonTest>
      </ButtonRow>
    </>
  );
};