// #region Imports

import { ComponentPropsWithoutRef, Suspense, useEffect, useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';

import { z } from 'zod';

import { cn } from '@/lib/utils';

import { ICard } from '@/types/cards';
import { zodResolver } from '@hookform/resolvers/zod';

import { useCards } from '../provider';
import { CardsActions } from './cards-actions';
import { CardsGrid } from './cards-grid';

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
      <CardsActions form={form} />
      <Suspense fallback={<div>Loading...</div>}>
        <CardsGrid cards={selectedCards} />
      </Suspense>
    </section>
  );
}
