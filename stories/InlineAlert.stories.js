import React from 'react';
import InlineAlert from '../components/InlineAlert';

export default {
  title: 'Tailwind/InlineAlerts',
  component: InlineAlert
};

const Template = (args) => <InlineAlert {...args} />;

export const Error = Template.bind({});
Error.args = {
  errors: ['Email is invalid', 'Password is incorrect']
};

export const Empty = Template.bind({});
Empty.args = {
  errors: []
};
