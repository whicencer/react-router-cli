const generateRouting = () => {
  return (
    `
import { publicRoutes } from './routes';
import { Route, Routes } from 'react-router-dom';

const Routing = () => {
  const mappedRoutes = publicRoutes.map(route => {
    return (
      <Route path={route.path} element={<route.component />} key={route.key} />
    );
  });

  return (
    <Routes>
      {mappedRoutes}
    </Routes>
  );
};

export default Routing;
    `.trim()
  );
};

export default generateRouting;