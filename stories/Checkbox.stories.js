import React from 'react';
import Checkbox from '../components/Checkbox';
import withFormik from 'storybook-formik';

export default {
  title: 'Tailwind/Checkbox',
  decorators: [withFormik],
  component: Checkbox
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Terms & conditions",
  name: "terms",
};

