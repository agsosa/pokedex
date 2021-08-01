import * as React from 'react';
import tw, { styled } from 'twin.macro';
import TypeTag from './TypeTag';

const TypesContainer = tw.div`flex space-x-2`;

export default function TypesList({ pokemon, big = false }) {
  return (
    <TypesContainer>
      {pokemon.types.map((t) => (
        <TypeTag type={t.type.name} />
      ))}
    </TypesContainer>
  );
}
