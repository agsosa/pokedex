import * as React from 'react';
import tw from 'twin.macro';
import Card from '@/components/pokemon/list/Card';
import Pagination from '@/components/common/Pagination';

const CardsContainer = tw.div`
flex flex-col space-y-6 justify-center items-center w-full
sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 
gap-10`;

export default function List({ pokemons }) {
  return (
    <CardsContainer>
      {Array.isArray(pokemons) && pokemons.length > 0 && pokemons.map((p) => <Card key={p.id} pokemon={p} />)}
    </CardsContainer>
  );
}
