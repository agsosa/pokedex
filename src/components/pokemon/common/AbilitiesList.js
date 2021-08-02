import tw from 'twin.macro';
import AbilityCard from './AbilityCard';

const AbilitiesContainer = tw.div`w-full flex flex-col space-y-6 max-w-lg text-center md:text-left`;

export default function AbilitiesList({ pokemon }) {
  if (!Array.isArray(pokemon.abilitiesData) || pokemon.abilitiesData.length === 0) return "No abilities";

  return (
    <AbilitiesContainer>
      {pokemon.abilitiesData.map((a) => (
        <AbilityCard key={a.id} ability={a} />
      ))}
    </AbilitiesContainer>
  );
}
