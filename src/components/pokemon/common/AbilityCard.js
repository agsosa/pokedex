import { memo } from 'react';
import tw from 'twin.macro';

const AbilityCard = tw.div`
flex flex-col justify-center items-center 
px-5 py-1 rounded-xl
transition duration-500 hover:bg-gray-200 hover:bg-opacity-60`;

const AbilityName = tw.span`text-xl capitalize font-semibold`;

const AbilityDescription = tw.span``;

const AbilityCardComponent = memo(({ ability }) => {
  const name = ability.names?.find((n) => n.language.name === 'es')?.name || ability.name;
  const description = ability.flavor_text_entries?.find((f) => f.language.name === 'es')?.flavor_text || 'No description';

  return (
    <AbilityCard>
      <AbilityName>{name}</AbilityName>
      <AbilityDescription>{description}</AbilityDescription>
    </AbilityCard>
  );
});

export default AbilityCardComponent;
