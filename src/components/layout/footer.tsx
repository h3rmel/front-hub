// #region Imports

import { NavLink } from 'react-router-dom';

import { LanguageToggle } from '@/contexts/translation';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { Bug, GitFork, GithubLogo, IconContext } from '@phosphor-icons/react';

// #endregion

const gitLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/h3rmel/front-hub#readme',
    icon: <GithubLogo />,
  },
  {
    label: 'Fork',
    href: 'https://github.com/h3rmel/front-hub/fork',
    icon: <GitFork />,
  },
  {
    label: 'Issues',
    href: 'https://github.com/h3rmel/front-hub/issues',
    icon: <Bug />,
  },
];

export function Footer() {
  return (
    <footer className={cn('relative', 'border-t border-border')}>
      <section className={cn('container', 'flex items-center justify-between', 'py-16')}>
        <IconContext.Provider value={{ size: 24, weight: 'regular' }}>
          <ul className={cn('flex items-center gap-4')}>
            {gitLinks.map((link, index) => (
              <li key={index}>
                <Button variant="outline" size="icon" asChild>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </IconContext.Provider>
        <LanguageToggle />
      </section>
      <hr className={cn('border-0 border-t border-border')} />
      <section className={cn('container', 'flex items-center justify-between', 'py-4')}>
        <NavLink to="/">
          <h1 className={cn('text-lg font-light uppercase tracking-wider duration-200 hover:font-normal')}>
            <span>front</span>
            <span className={'-ml-[3px]'}>hub</span>
          </h1>
        </NavLink>
        <p>Isaac Hermel Reginato &copy; 2024</p>
      </section>
    </footer>
  );
}
