import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StoriesListing from '../components/StoriesListing';
import store from '../redux/store';
import { fetchStories } from '../redux/slices/storiesSlice';

store.dispatch(fetchStories())

export default {
  title: 'Example/StoriesListing',
  component: StoriesListing,
  argTypes: {},
} as ComponentMeta<typeof StoriesListing>;

const Template: ComponentStory<typeof StoriesListing> = (args) => <StoriesListing {...args} />;

export const StoriesListingComponent = Template.bind({});
StoriesListingComponent.args = {
  /*👇 The args you need here will depend on your component */
};
