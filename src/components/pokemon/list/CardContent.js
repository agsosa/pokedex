import * as React from 'react';
import tw from 'twin.macro';

import TypesList from '@/components/pokemon/common/TypesList';
import StatsList from '@/components/pokemon/common/StatsList';

const CardContent = tw.div`flex flex-col justify-center items-center space-y-4 relative w-full p-5 pt-16`;

const NameContainer = tw.div`flex items-center justify-center space-x-2`;
const Name = tw.h3`text-2xl font-bold capitalize z-10`;
const Number = tw.span`text-gray-700`;

export default function CardContentComponent({ pokemon }) {
  return (
    <CardContent>
      <NameContainer>
        <Name>{pokemon.name}</Name>
        <Number>#{pokemon.id}</Number>
      </NameContainer>

      <StatsList pokemon={pokemon} />
      <TypesList pokemon={pokemon} />
    </CardContent>
  );
}
