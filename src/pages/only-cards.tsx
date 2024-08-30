import { Cards } from '@/contexts/cards';

import { Head } from '@/components/seo/head';

export function OnlyCardsPage() {
  return (
    <>
      <Head title="Cards" description="Cards" />
      <Cards className={'min-h-screen w-full'} />
    </>
  );
}
