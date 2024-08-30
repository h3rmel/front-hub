// #region Imports

import { useMemo } from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import { ErrorPage, HomePage, Root } from '@/pages';
import { OnlyCardsPage } from '@/pages/only-cards';

// #endregion

const routes: RouteObject[] = [
  {
    id: 'home',
    path: '/',
    element: <HomePage />,
  },
  {
    id: 'cards',
    path: '/cards',
    element: <OnlyCardsPage />,
  },
];

const createAppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [...routes],
  },
]);

export function AppRouter() {
  const router = useMemo(() => createAppRouter, []);

  return <RouterProvider router={router} />;
}
