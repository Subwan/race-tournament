import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { ROUTER } from './constants/routeSchema';

import './App.scss';

export const App: FC = () => <RouterProvider router={ROUTER} />;
