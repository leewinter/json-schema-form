import { addons } from '@storybook/manager-api';
import storybookTheme from './storybookTheme.tsx';

addons.setConfig({
  theme: storybookTheme,
});
