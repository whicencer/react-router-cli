const generateRoutes = () => {
  return (
    `
import { RouteComponent } from './router-typings';

export const publicRoutes: RouteComponent[] = [
  {
    path: '/',
    component: Home,
    key: 'home',
  },
];
    `.trim()
  );
};

export default generateRoutes;