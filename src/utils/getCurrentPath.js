import path from 'path';

export const getCurrentPath = (pathArg) => {
  return path.join(process.cwd(), pathArg);
};