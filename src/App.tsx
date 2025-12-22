import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import Snowfall from 'react-snowfall'

import { ROUTER } from './constants/routeSchema';

import './App.scss';

export const App: FC = () => (
  <>
    <Snowfall />
    <RouterProvider router={ROUTER} />
  </>
);
