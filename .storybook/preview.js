import { Provider } from 'react-redux';
import store from 'redux/store';
import 'i18n/index';
import 'antd-mobile/dist/antd-mobile.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];
