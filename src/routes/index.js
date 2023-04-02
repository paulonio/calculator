import { useRoutes } from 'react-router-dom';
import { routes } from '../constants/routes';

const RouterElement = () => {
  return useRoutes(routes);
};

export { RouterElement };
