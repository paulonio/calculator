import { lazyLoadRoutes } from '@routes/lazyLoadRoutes';

const routes = [
  { path: '/', element: lazyLoadRoutes('Home') },
  { path: 'homeCC', element: lazyLoadRoutes('HomeCC') },
  { path: 'settings', element: lazyLoadRoutes('Settings') },
  { path: 'settingsCC', element: lazyLoadRoutes('SettingsCC') },
];

export default routes;
