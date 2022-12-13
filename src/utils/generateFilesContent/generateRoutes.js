const generateRoutes = (isPrivate = false) => {
  return (
    `
import { RouteComponent } from './router-typings';

export const publicRoutes: RouteComponent[] = [];

${
  isPrivate ? `export const privateRoutes: RouteComponent[] = [];` : ''
}
    `.trim()
  );
};

export default generateRoutes;