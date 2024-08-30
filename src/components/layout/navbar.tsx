// #region Imports

import { NavLink, useLocation } from 'react-router-dom';

import { LanguageDropdown } from '@/contexts/translation';

import { cn } from '@/lib/cn';

// #endregion

const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Cards',
    href: '/cards',
  },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className={cn('fixed left-0 top-0 z-[999] md:top-4', 'flex items-center justify-center', 'w-full')}>
      <nav
        className={cn(
          'relative',
          'container',
          'flex items-center justify-between',
          'h-16 max-w-3xl md:h-auto',
          'p-2',
          'border border-border md:rounded-md',
          'bg-background/50',
          'backdrop-blur-sm',
        )}
      >
        <div className={cn('flex items-center justify-start', 'basis-1/2 md:basis-1/3')}>
          <NavLink to="/">
            <h1 className={cn('text-lg font-light uppercase tracking-wider duration-200 hover:font-normal')}>
              <span>front</span>
              <span className={'-ml-[3px]'}>hub</span>
            </h1>
          </NavLink>
        </div>
        <div className={cn('hidden items-center justify-center md:flex', 'md:basis-1/3')}>
          <ul className={'inline-flex items-center gap-2'}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={cn(
                    'text-sm font-light uppercase text-muted-foreground duration-200 hover:text-foreground',
                    pathname === link.href ? 'text-foreground' : '',
                  )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className={cn('flex items-center justify-end gap-4', 'basis-1/2 md:basis-1/3')}>
          <LanguageDropdown />
          {/* <ThemeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
