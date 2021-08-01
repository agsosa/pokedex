import * as React from 'react';
import tw from 'twin.macro';
import Card from '@/components/pokemon/list/Card';
import Pagination from '@/components/common/Pagination';

const CardsContainer = tw.div`grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center items-center w-full`;

export default function List({ pokemons }) {
  return (
    <CardsContainer>
      {Array.isArray(pokemons) && pokemons.length > 0 && pokemons.map((p) => <Card pokemon={p} />)}
    </CardsContainer>
  );
}
