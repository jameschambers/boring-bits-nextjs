import React from 'react';
import Input from '../components/Input';
import withFormik from 'storybook-formik';

export default {
  title: 'Tailwind/Inputs',
  decorators: [withFormik],
  component: Input
};

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "Your name",
  name: "name",
  placeholder: "e.g. Gary Newman" 
};

export const Email = Template.bind({});
Email.args = {
  label: "Your email",
  name: "email",
  placeholder: "e.g. gary@newman.fyi" 
};

export const HasError = Template.bind({});
HasError.args = {
  label: "Your email",
  name: "email",
  placeholder: "e.g. gary@newman.fyi",
  hasError: true
};
