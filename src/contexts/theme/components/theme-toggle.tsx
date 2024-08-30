// #region Imports

import { useTheme } from '@/contexts/theme/provider';
import { useTranslation } from '@/contexts/translation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Moon, Sun } from '@phosphor-icons/react';

import { themeToggleLanguages } from './theme-toggle.lng';

// #endregion

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const { translate } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun size={20} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon size={20} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{translate('toggle_theme', themeToggleLanguages)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {translate('light', themeToggleLanguages)}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>{translate('dark', themeToggleLanguages)}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {translate('system', themeToggleLanguages)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
