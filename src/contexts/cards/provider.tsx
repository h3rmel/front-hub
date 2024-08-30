// #region Imports

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ICard } from '@/types/cards';

import { fallbackCards } from './data/fallback-cards';

// #endregion

// #region Types & Interfaces

interface CardsProviderProps {
  children: ReactNode;
  storageKey?: string;
}

interface CardsProviderState {
  cards: ICard[];
  setCards: (cards: ICard[]) => void;
}

// #endregion

const initialState: CardsProviderState = {
  cards: [],
  setCards: () => {},
};

const CardsProviderContext = createContext<CardsProviderState>(initialState);

export function CardsProvider({ children, storageKey = 'front-hub-cards' }: CardsProviderProps) {
  const [cards, setCards] = useState<ICard[]>(initialState.cards as ICard[]);

  useEffect(() => {
    const storedCards = localStorage.getItem(storageKey);

    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }

    setCards(fallbackCards);
  }, [storageKey]);

  const value = {
    cards,
    setCards: (cards: ICard[]) => {
      localStorage.setItem(storageKey, JSON.stringify(cards));
      setCards(cards);
    },
  };

  return <CardsProviderContext.Provider value={value}>{children}</CardsProviderContext.Provider>;
}

export const useCards = () => {
  const context = useContext(CardsProviderContext);

  if (context === undefined) throw new Error('useCards must be used within a CardsProvider');

  return context;
};
