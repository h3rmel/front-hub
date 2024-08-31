// #region Imports

import { ComponentPropsWithoutRef, Suspense, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { useTranslation } from '@/contexts/translation';

import { cn } from '@/lib/utils';

import { ICard } from '@/types/cards';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCards } from '../provider';
import { CardsActions } from './cards-actions';
import { CardsGrid } from './cards-grid';
import { cardsLanguage } from './cards.lng';
import { CardsSkeleton } from './cards.skeleton';

// #endregion

export const formSchema = z.object({
  search: z.string(),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CardsProps extends ComponentPropsWithoutRef<'section'> {}

export function Cards({ className, ...props }: CardsProps) {
  const [selectedCards, setSelectedCards] = useState<ICard[]>([]);

  const form: UseFormReturn<z.infer<typeof formSchema>> = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  });

  const { cards } = useCards();
  const { translate } = useTranslation();

  useEffect(() => {
    const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(form.watch('search').toLowerCase()));

    setSelectedCards(filteredCards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, form, form.watch('search')]);

  useEffect(() => {
    setSelectedCards(cards);
  }, [cards]);

  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        'h-full w-full',
        'py-24',
        'bg-white dark:bg-black',
        className,
      )}
      {...props}
    >
      <Suspense fallback={<CardsSkeleton />}>
        <CardsActions form={form} />
        <CardsGrid cards={selectedCards} />
        <span className={'text-center'}>
          <p className={'text-muted-foreground'}>
            {translate('add_a_card', cardsLanguage)} {translate('click_here', cardsLanguage)}
          </p>
          <a
            href="https://github.com/h3rmel/front-hub/blob/main/CONTRIBUTING.md"
            target="_blank"
            className={'underline'}
            rel="noopener noreferrer"
          >
            {translate('contributing', cardsLanguage)}
          </a>
        </span>
      </Suspense>
    </section>
  );
}
