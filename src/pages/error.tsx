// #region Imports

import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import { useTranslation } from '@/contexts/translation';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { cn } from '@/lib/utils';

import { errorLanguages } from './error.lng';

// #endregion

export function ErrorPage() {
  const { translate } = useTranslation();

  const error = useRouteError();

  // eslint-disable-next-line no-console
  console.error(error);

  let errorMessage = '';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div id="error-page" className={cn('h-screen w-full', 'flex items-center justify-center')}>
      <Card>
        <CardHeader>
          <CardTitle>{translate('oh_no', errorLanguages)} ☹️</CardTitle>
          <CardDescription>{translate('error_occured', errorLanguages)}</CardDescription>
        </CardHeader>
        <CardContent className={'inline-flex w-full items-center gap-2'}>
          <p>{translate('error', errorLanguages)}:</p>
          <Badge variant="destructive">{errorMessage}</Badge>
        </CardContent>
        <CardFooter>
          <Button onClick={() => window.history.back()}>{translate('go_back', errorLanguages)}</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
