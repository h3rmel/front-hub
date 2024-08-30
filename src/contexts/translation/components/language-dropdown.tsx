// #region Imports

import { useTranslation } from '@/contexts/translation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// #endregion

const countryLanguageMap: Record<string, string> = {
  'pt-BR': 'Brasil',
  'en-US': 'United States',
};

export function LanguageDropdown() {
  const { language, setLanguage } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <img src={`/languages/${language}.png`} alt={`${countryLanguageMap[language]}'s flag`} width={24} />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setLanguage('en-US')}>
          <img src="/languages/en-US.png" alt="United States's flag" width={24} />
          en-US
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('pt-BR')}>
          <img src="/languages/pt-BR.png" alt="Brasil's flag" width={24} />
          pt-BR
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
