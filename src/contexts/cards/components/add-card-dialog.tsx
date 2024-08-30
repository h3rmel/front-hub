// #region Imports

import { useTranslation } from '@/contexts/translation';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { addCardDialogLanguages } from './add-card-dialog.lng';

// #endregion

export function AddCardDialog() {
  const { translate } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{translate('add_link', addCardDialogLanguages)}</Button>
      </DialogTrigger>
      <DialogContent>Hello</DialogContent>
    </Dialog>
  );
}
