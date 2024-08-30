import { useTranslation } from '@/contexts/translation';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const languages = ['pt-BR', 'en-US'];

const countryLanguageMap: Record<string, string> = {
  'pt-BR': 'Brasil',
  'en-US': 'United States',
};

export function LanguageToggle() {
  const { setLanguage, language } = useTranslation();

  return (
    <ToggleGroup aria-label="language-toggle" type="single" value={language} onValueChange={setLanguage}>
      {languages.map((language, index) => (
        <ToggleGroupItem key={index} value={language}>
          <img src={`/languages/${language}.png`} alt={`${countryLanguageMap[language]}'s flag`} width={24} />
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
