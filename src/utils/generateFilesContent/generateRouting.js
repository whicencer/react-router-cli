const generateRouting = (isPrivate = false) => {
  return (
    `
import { publicRoutes,${isPrivate ? 'privateRoutes' : ''} } from './routes';
${isPrivate
  ? `
  import { PublicRoutes } from './lib/PublicRoutes';
  import { PrivateRoutes } from './lib/PrivateRoutes';
  `.trim()
  : ''
}
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
  const mappedRoutes = publicRoutes.map(route => {
    return (
      <Route path={route.path} element={<route.component />} key={route.key} />
    );
  });
  ${
    isPrivate
    ? `const mappedPrivateRoutes = privateRoutes.map(route => {
      return (
        <Route path={route.path} element={<route.component />} key={route.key} />
      );
    });`
    : ''
  }

  return (
    <Routes>
      { mappedRoutes }
      ${ isPrivate
        ? `
          <Route element={<PublicRoutes />}>
            {mappedRoutes}
          </Route>
          <Route element={<PrivateRoutes />}>
            {mappedPrivateRoutes}
          </Route>
        `.trim()
        : '' }
    </Routes>
  );
};

export default Routing;
    `.trim()
  );
};

export default generateRouting;