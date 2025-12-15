import { createBrowserRouter } from 'react-router-dom';

import { StartPage } from '../pages';
import { ROUTES } from './routes';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
    children: [
      {
        path: ROUTES.STAGES,
        // element: <MenuPage />,
      },
      {
        path: ROUTES.RESULTS,
        // element: <MenuPage />,
      },
    ],
  },
]);
