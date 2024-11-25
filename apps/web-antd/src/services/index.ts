import { defs as apisDefs, apis } from './apis';

(window as any).defs = {
  apis: apisDefs,
};
(window as any).API = {
  apis,
};
