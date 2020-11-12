import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Tailwind/Buttons',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  disabled: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Button',
};

export const Wide = Template.bind({});
Wide.args = {
  primary: true,
  label: 'Button',
  wide: true
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: 'small',
  label: 'Button',
};

