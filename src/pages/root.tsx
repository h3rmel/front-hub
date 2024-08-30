// #region Imports
import { Outlet } from 'react-router-dom';

import { Navbar } from '@/components/layout/navbar';

// #endregion

export function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
