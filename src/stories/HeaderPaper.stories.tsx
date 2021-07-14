import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeaderPaper from './HeaderPaper';

export default {
  title: 'Example/HeaderPaper',
  component: HeaderPaper,
  argTypes: {},
} as ComponentMeta<typeof HeaderPaper>;

const Template: ComponentStory<typeof HeaderPaper> = () => <HeaderPaper />;

export const EmptyHeader = Template.bind({});
EmptyHeader.args = {
  /*👇 The args you need here will depend on your component */
};
