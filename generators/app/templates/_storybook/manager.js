// .storybook/manager.js

import { addons } from '@storybook/addons';
import  <%= pascalTitle %> from './customTheme';

addons.setConfig({
  theme: <%= pascalTitle %>,
});
