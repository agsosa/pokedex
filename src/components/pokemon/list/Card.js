import * as React from 'react';
import tw from 'twin.macro';
import Link from 'next/link';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

const Card = tw.a`
flex flex-col justify-center items-center w-full
bg-white shadow-xl rounded-xl 
cursor-pointer
transform hover:scale-110 transition duration-500`;

export default function CardPokemon({ pokemon }) {
  return (
    <Link href={`/pokemons/details/${pokemon.id}`}>
      <Card className='group'>
        <CardHeader pokemon={pokemon} />
        <CardContent pokemon={pokemon} />
      </Card>
    </Link>
  );
}
