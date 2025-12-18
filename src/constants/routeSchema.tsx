import { createBrowserRouter } from 'react-router-dom';

import { StartPage, TournamentPage } from '../pages';
import { ROUTES } from './routes';

export const ROUTER = createBrowserRouter([
  {
    path: '/',
    element: <StartPage />,
  },
  {
    element: <TournamentPage />,
    children: [
      {
        path: ROUTES.STAGES,
        element: <div>STAGES</div>,
      },
      {
        path: ROUTES.RESULTS,
        element: <div>RESULTS</div>,
      },
    ]
  },
]);
