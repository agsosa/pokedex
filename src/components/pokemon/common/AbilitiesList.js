import tw from 'twin.macro';
import AbilityCard from './AbilityCard';

const AbilitiesContainer = tw.div`w-full flex flex-col space-y-6 max-w-lg text-center md:text-left`;

export default function AbilitiesList({ pokemon }) {
  return (
    <AbilitiesContainer>
      {pokemon.abilitiesData.map((a) => (
        <AbilityCard ability={a} />
      ))}
    </AbilitiesContainer>
  );
}
