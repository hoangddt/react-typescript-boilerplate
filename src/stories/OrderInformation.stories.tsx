import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import OrderInformation from '../pages/Main/OrderInformation';


export default {
  title: 'Example/Shopee',
  component: OrderInformation,
  argTypes: {},
} as ComponentMeta<typeof OrderInformation>;

const Template: ComponentStory<typeof OrderInformation> = () => <OrderInformation />;

export const OrderInfo = Template.bind({});
OrderInfo.args = {
  /*👇 The args you need here will depend on your component */
};
