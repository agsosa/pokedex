import * as React from 'react';
import tw, { styled } from 'twin.macro';
import TypeTag from './TypeTag';

const TypesContainer = styled.div(({ big }) => [tw`flex space-x-2`, big && tw`text-3xl`]);

export default function TypesList({ pokemon, big = false }) {
  return (
    <TypesContainer big={big}>
      {pokemon.types.map((t) => (
        <TypeTag type={t.type.name} />
      ))}
    </TypesContainer>
  );
}
