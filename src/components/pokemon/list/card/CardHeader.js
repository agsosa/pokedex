// Header component for our pokemon info card

import * as React from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import { usePalette } from 'react-palette';
import propTypes from 'prop-types';

import { getPokemonSprite } from '@/lib/API';

const CardHeader = tw.div`
filter contrast-125
flex flex-col items-center justify-center relative
w-full h-full 
rounded-t-xl p-3 pb-36`;

const SpriteContainer = tw.div`
absolute top-1/3 p-5
bg-white rounded-full 
transform group-hover:scale-125 transition duration-500`;

export default function CardHeaderComponent({ pokemon }) {
  // Pokemon sprite state
  const sprite = getPokemonSprite(pokemon.id);
  const { data: imgData, loading, error } = usePalette(sprite); // Get pokemon's sprite colors

  return (
    <CardHeader style={{ backgroundColor: imgData?.vibrant }}>
      <SpriteContainer>
        <Image src={sprite} alt={pokemon.name} width='130px' height='130px' />
      </SpriteContainer>
    </CardHeader>
  );
}

CardHeaderComponent.propTypes = {
  pokemon: propTypes.shape({
    name: propTypes.string,
    id: propTypes.number,
  }).isRequired
}