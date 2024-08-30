// #region Imports

import { Cards } from '@/contexts/cards';
import { useTheme } from '@/contexts/theme';
import { useTranslation } from '@/contexts/translation/provider';

import { Head } from '@/components/seo/head';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/cn';

import { homeLanguages } from './home.lng';

// #endregion

export function HomePage() {
  const { translate } = useTranslation();
  const { theme } = useTheme();

  return (
    <>
      <Head title="Home" description="Home" />
      <section
        className={cn(
          'flex flex-col items-center justify-center',
          'bg-fixed bg-center',
          theme === 'dark' ? 'bg-grid-pattern-dark' : 'bg-grid-pattern-light',
          'border-b border-muted',
        )}
      >
        <section
          className={cn(
            'min-h-screen w-full',
            'flex items-center justify-center',
            'dark:bg-vignette-dark bg-vignette-light bg-center',
          )}
        >
          <Card className={'max-w-xl'}>
            <CardHeader className={'text-center'}>
              <CardTitle className={'font-normal uppercase'}>
                <span>front</span>
                <span className={'ml-[-2px]'}>hub</span>
              </CardTitle>
              <CardDescription>{translate('description', homeLanguages)}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={'text-wrap text-center'}>{translate('content', homeLanguages)}</p>
            </CardContent>
            <CardFooter className={'flex items-center justify-center'}>
              <Button>{translate('get-started', homeLanguages)}</Button>
            </CardFooter>
          </Card>
        </section>
      </section>
      <Cards />
    </>
  );
}
