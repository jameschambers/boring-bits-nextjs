import React from 'react';
import Heading from '../components/Heading';

export default {
  title: 'Tailwind/Headings',
  component: Heading
};

const Template = (args) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
  type: "h1",
  text: "Heading One"
};

export const H2 = Template.bind({});
H2.args = {
  type: "h2",
  text: "Heading Two"
};

export const H3 = Template.bind({});
H3.args = {
  type: "h3",
  text: "Heading Three"
};
