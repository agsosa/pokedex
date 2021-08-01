import { memo } from 'react';
import tw from 'twin.macro';

const AbilityCard = tw.div`flex flex-col justify-center items-center px-5 py-1 border-l-2 border-gray-300 transition duration-500 hover:bg-gray-200 hover:bg-opacity-60`;
const AbilityName = tw.span`text-xl capitalize font-semibold`;
const AbilityDescription = tw.span``;

const AbilitiesList = memo(({ ability }) => {
  const name = ability.names?.find((n) => n.language.name === 'es')?.name || ability.name;
  const description = ability.flavor_text_entries.find((f) => f.language.name === 'es').flavor_text || '';

  return (
    <AbilityCard>
      <AbilityName>{name}</AbilityName>
      <AbilityDescription>{description}</AbilityDescription>
    </AbilityCard>
  );
});

export default AbilitiesList;
