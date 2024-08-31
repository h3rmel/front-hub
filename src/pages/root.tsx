// #region Imports

import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';

// #endregion

export function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
