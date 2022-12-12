const generateProvider = () => {
  return (
    `
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom'

export const routerProvider = (Component: FC) => () => {
  return (
    <BrowserRouter>
      <Component />
    </BrowserRouter>
  );
};
    `.trim()
  );
};

export default generateProvider;