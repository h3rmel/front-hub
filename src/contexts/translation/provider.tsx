// #region Imports

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { Language, LanguageList } from '@/types/translation';

// #endregion

// #region Interfaces & Types

interface TranslationProviderProps {
  children: ReactNode;
  fallbackLanguage: Language;
  storageKey?: string;
}

interface TranslationProviderState {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, list: LanguageList) => string;
}

// #endregion

const initialState: TranslationProviderState = {
  language: 'pt-BR',
  setLanguage: () => {},
  translate: () => '',
};

const TranslationProviderContext = createContext<TranslationProviderState>(initialState);

export function TranslationProvider({
  children,
  fallbackLanguage,
  storageKey = 'vite-ui-language',
  ...props
}: TranslationProviderProps) {
  const [language, setLanguage] = useState<Language>(initialState.language);

  function translate(key: string, list: LanguageList): string {
    const language = localStorage.getItem(storageKey) as Language;

    if (key === '') return '';

    if (!language) return list[key][fallbackLanguage];

    return list[key][language];
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem(storageKey);

    if (storedLanguage) {
      setLanguage(storedLanguage as Language);
    }

    setLanguage(fallbackLanguage);
  }, [fallbackLanguage, storageKey]);

  const value = {
    language,
    setLanguage: (language: Language) => {
      localStorage.setItem(storageKey, language);
      setLanguage(language);
    },
    translate,
  };

  return (
    <TranslationProviderContext.Provider {...props} value={value}>
      {children}
    </TranslationProviderContext.Provider>
  );
}

export const useTranslation = () => {
  const context = useContext(TranslationProviderContext);

  if (context === undefined) throw new Error('useTranslation must be used within a TranslationProvider');

  return context;
};
