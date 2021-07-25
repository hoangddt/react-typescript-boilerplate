import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavBar from '../components/NavBar';


export default {
  title: 'Example/NavBar',
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const EmptyNav = Template.bind({});
EmptyNav.args = {
  /*👇 The args you need here will depend on your component */
};
