import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import NewsListing from './NewsListing';
import store from '../redux/store';
import { fetchStories } from '../redux/slices/storiesSlice';

store.dispatch(fetchStories())

export default {
  title: 'Example/NewsListing',
  component: NewsListing,
  argTypes: {},
} as ComponentMeta<typeof NewsListing>;

const Template: ComponentStory<typeof NewsListing> = (args) => <NewsListing {...args} />;

export const NewsListingComponent = Template.bind({});
NewsListingComponent.args = {
  /*👇 The args you need here will depend on your component */
};
