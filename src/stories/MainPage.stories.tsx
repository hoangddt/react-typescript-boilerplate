import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostPage from '../pages/Main/PostPage';


export default {
  title: 'Example/PostPage',
  component: PostPage,
  argTypes: {},
} as ComponentMeta<typeof PostPage>;

const Template: ComponentStory<typeof PostPage> = () => <PostPage  />;

export const MainPage = Template.bind({});
MainPage.args = {
  /*👇 The args you need here will depend on your component */
};
