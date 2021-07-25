import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentList from '../components/CommentEntity';
import store from '../redux/store';
import { fetchComments } from '../redux/slices/commentsSlice';

let ids: Array<number> = [27891306,27891360,27891203,27892686,27892380,27891396,27891060,27891443,27892159,27892432,27891630,27892039,27892538,27891276,27891427,27892114,27891728,27891769,27891531,27891048]
store.dispatch(fetchComments(ids))

export default {
  title: 'Example/CommentEntity',
  component: CommentList,
  argTypes: {},
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = () => <CommentList />;

export const DefaultCommentEntity = Template.bind({});
DefaultCommentEntity.args = {
  /*👇 The args you need here will depend on your component */
};
