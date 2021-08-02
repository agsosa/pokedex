// Component to display the abilities of a specific pokemon

import tw from 'twin.macro';
import AbilityCard from './AbilityCard';
import useTranslation from 'next-translate/useTranslation';
import propTypes from 'prop-types';

const AbilitiesContainer = tw.div`w-full flex flex-col space-y-6 max-w-lg text-center md:text-left`;

export default function AbilitiesList({ pokemon }) {
  const { t } = useTranslation('common');

  // Localized strings
  const strings = {
    noAbilities: t('no-abilities'),
  };

  if (!Array.isArray(pokemon.abilitiesData) || pokemon.abilitiesData.length === 0) return strings.noAbilities; // No abilities case

  return (
    <AbilitiesContainer>
      {pokemon.abilitiesData.map((a) => (
        <AbilityCard key={a.id} ability={a} />
      ))}
    </AbilitiesContainer>
  );
}

AbilitiesList.propTypes = {
  pokemon: propTypes.shape({ abilitiesData: propTypes.arrayOf(propTypes.object) }).isRequired,
};
