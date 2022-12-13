const generateRoutesLib = (isPrivate = false) => {
  return (
    `
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ${isPrivate ? 'PrivateRoutes' : 'PublicRoutes'} = () => {
  const isAuth = true;

  return ${isPrivate ? 'isAuth' : '!isAuth'} ? <Outlet /> : <Navigate to={'${isPrivate ? '/' : '/login'}'} />;
};
    `.trim()
  );
};

export default generateRoutesLib;