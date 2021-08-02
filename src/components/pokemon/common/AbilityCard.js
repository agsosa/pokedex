import { memo } from 'react';
import tw from 'twin.macro';
import useTranslation from 'next-translate/useTranslation';

const AbilityCard = tw.div`
flex flex-col justify-center items-center 
px-5 py-1 rounded-xl
transition duration-500 hover:bg-gray-200 hover:bg-opacity-60`;

const AbilityName = tw.span`text-xl capitalize font-semibold`;

const AbilityDescription = tw.span``;

const AbilityCardComponent = memo(({ ability }) => {
  const { t, lang } = useTranslation('common');

  // Localized strings
  const strings = {
    noDesc: t('no-description'),
  };

  const name = ability.names?.find((n) => n.language.name === lang)?.name || ability.name;
  const description = ability.flavor_text_entries?.find((f) => f.language.name === lang)?.flavor_text || strings.noDesc;

  return (
    <AbilityCard>
      <AbilityName>{name}</AbilityName>
      <AbilityDescription>{description}</AbilityDescription>
    </AbilityCard>
  );
});

export default AbilityCardComponent;
