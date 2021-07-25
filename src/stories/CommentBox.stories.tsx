import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentBox from '../components/CommentBox';


export default {
  title: 'Example/CommentBox',
  component: CommentBox,
  argTypes: {},
} as ComponentMeta<typeof CommentBox>;

const Template: ComponentStory<typeof CommentBox> = () => <CommentBox />;

export const DefaultCommentBox = Template.bind({});
DefaultCommentBox.args = {
  /*👇 The args you need here will depend on your component */
};
