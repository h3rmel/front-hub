// #region Imports

import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { CardsProvider } from '@/contexts/cards';
import { ThemeProvider } from '@/contexts/theme';
import { TranslationProvider } from '@/contexts/translation';

// #endregion

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="front-hub-theme">
        <TranslationProvider fallbackLanguage="en-US" storageKey="front-hub-lng">
          <CardsProvider>{children}</CardsProvider>
        </TranslationProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
