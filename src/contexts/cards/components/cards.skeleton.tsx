import { Skeleton } from '@/components/ui/skeleton';

import { cn } from '@/lib/utils';

export function CardsSkeleton() {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center gap-4',
        'h-full w-full',
        'py-24',
        'bg-white dark:bg-black',
      )}
    >
      <Skeleton className="h-10 w-full sm:w-1/2" />
      <section
        className={cn('container', 'w-full', 'grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4')}
      >
        {Array.from({ length: 16 }).map((_, index) => (
          <Skeleton key={index} className="h-40 w-full" />
        ))}
      </section>
    </section>
  );
}
