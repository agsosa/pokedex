import * as React from 'react';
import tw, { styled } from 'twin.macro';
import TypeTag from './TypeTag';
import useTranslation from 'next-translate/useTranslation';

const TypesContainer = styled.div(({ big }) => [tw`flex space-x-2`, big && tw`text-3xl`]);

export default function TypesList({ pokemon, big = false }) {
  const { t } = useTranslation('pokemon_types');

  return (
    <TypesContainer big={big}>
      {pokemon.types.map(({ type }) => (
        <TypeTag type={t(type?.name?.toLowerCase() || "unknown")} />
      ))}
    </TypesContainer>
  );
}
