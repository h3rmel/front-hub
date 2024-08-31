// #region Imports

import { useEffect } from 'react';

import { useTranslation } from '@/contexts/translation';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { ICard } from '@/types/cards';

import { cardsGridLanguages } from './cards-grid.lng';

// #endregion

interface CardsGridProps {
  cards: ICard[];
}

export function CardsGrid({ cards }: CardsGridProps) {
  const { translate } = useTranslation();

  useEffect(() => {
    const cardsElement = document.getElementById('cards');

    function cardsEffect() {
      cardsElement?.addEventListener('mousemove', (event) => {
        for (const card of document.getElementsByClassName('card')) {
          const rect = card.getBoundingClientRect(),
            x = event.clientX - rect.left,
            y = event.clientY - rect.top;

          (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        }
      });
    }

    cardsEffect();

    return () => {
      cardsElement?.removeEventListener('mousemove', cardsEffect);
    };
  }, []);

  return (
    <section
      id="cards"
      className={cn(
        'container',
        'w-full',
        'cards',
        'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4',
      )}
      // className={cn('w-full', 'container', 'flex flex-col flex-wrap justify-between gap-4 md:flex-row', 'cards')}
    >
      {cards.map((card, index) => (
        <a href={card.link} target="_blank" rel="noopener noreferrer" key={index} className={cn('card', 'h-40')}>
          <Card className={cn('card-content', 'border-none', 'p-6')}>
            <CardHeader className="p-0">
              <CardTitle className="text-xl">{card.title}</CardTitle>
              <CardDescription>{translate(card.description, cardsGridLanguages)}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      ))}
    </section>
  );
}
