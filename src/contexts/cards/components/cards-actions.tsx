// #region Imports

import { ChangeEvent } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useDebouncedCallback } from 'use-debounce';
import { z } from 'zod';

import { useTranslation } from '@/contexts/translation';

import { Form, FormControl, FormField } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { cn } from '@/lib/utils';

import { AddCardDialog } from './add-card-dialog';
import { formSchema } from './cards';
import { cardsActionsLanguages } from './cards-actions.lng';

// #endregion

interface CardsActionsProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

const DEBOUNCE_TIME = 500;

export function CardsActions({ form }: CardsActionsProps) {
  const { translate } = useTranslation();

  const handleChangeSearch = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    form.setValue('search', value);
  }, DEBOUNCE_TIME);

  return (
    <section className={cn('relative', 'container', 'flex items-center justify-start gap-4')}>
      <AddCardDialog />
      <Form {...form}>
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormControl>
              <Input
                value={field.value}
                {...form.register('search', {
                  onChange(event: ChangeEvent<HTMLInputElement>) {
                    handleChangeSearch(event);
                  },
                })}
                placeholder={translate('search', cardsActionsLanguages)}
              />
            </FormControl>
          )}
        />
      </Form>
    </section>
  );
}
