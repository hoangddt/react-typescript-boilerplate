import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StartButton from '../components/Button';


export default {
  title: 'Example/NavBar',
  component: StartButton,
  argTypes: {},
} as ComponentMeta<typeof StartButton>;

const Template: ComponentStory<typeof StartButton> = () => <StartButton />;

export const SampleButton = Template.bind({});
SampleButton.args = {
  /*👇 The args you need here will depend on your component */
};
