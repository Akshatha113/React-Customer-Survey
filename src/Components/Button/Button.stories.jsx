import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  btnClass: 'btn-primary',
  label: 'Button',
  border: false,
  size: 'medium',
};

export const Light = Template.bind({});
Light.args = {
  btnClass: 'btn-light',
  label: 'Button',
  border: true,
  size: 'medium',
};

export const Danger = Template.bind({});
Danger.args = {
  btnClass: 'btn-danger',
  label: 'Button',
  border: false,
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
