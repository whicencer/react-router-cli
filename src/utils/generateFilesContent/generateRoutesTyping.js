const generateRoutesTyping = () => {
  return (
    `
import { FC } from 'react';

export interface RouteComponent {
  path: string;
  component: FC;
  key: string;
}
    `.trim()
  );
};

export default generateRoutesTyping;