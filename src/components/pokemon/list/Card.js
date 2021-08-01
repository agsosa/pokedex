import * as React from 'react';
import Image from 'next/image';
import tw from 'twin.macro';
import { usePalette } from 'react-palette';
import TypeTag from './TypeTag';
import usePokedex from '@/lib/usePokedex';
import Link from 'next/link';
import { GiBroadsword,  GiShield } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { BiShield } from 'react-icons/bi';

const Card = tw.a`transform flex flex-col justify-center items-center bg-white shadow-xl w-full rounded-xl hover:scale-110 transition duration-500 cursor-pointer`;
const CardHeader = tw.div`flex flex-col items-center justify-center w-full relative h-full rounded-t-xl h-full p-3 pb-36`;

const CardContent = tw.div`p-5 pt-16 w-full flex flex-col justify-center items-center space-y-4 relative`;

const NameContainer = tw.div`flex space-x-2 items-center justify-center`;
const Name = tw.h3`text-2xl font-bold capitalize z-10`;
const Number = tw.span`text-gray-700`;

const SpriteContainer = tw.div`bg-white rounded-full p-5 absolute top-1/3 transform group-hover:scale-125 transition duration-500`;

const TypesContainer = tw.div`flex space-x-2`;
const StatsContainer = tw.div`flex space-x-2 divide-x-2`;

const Stat = tw.div`flex space-x-2 justify-center items-center w-full px-3`;
const StatNumber = tw.span`font-bold text-xl`;
const StatIcon = tw.span`text-gray-600 text-lg`;

export default function CardPokemon({ pokemon }) {
  const { getPokemonSprite } = usePokedex();
  const sprite = getPokemonSprite(pokemon.id);

  const { data: imgData, loading, error } = usePalette(sprite); // Get pokemon's sprite colors

  return (
    <Link href={`/details/${pokemon.id}`}>
      <Card className='group' >
        <CardHeader style={{ backgroundColor: imgData?.vibrant }}>
          <SpriteContainer>
            <Image src={sprite} alt={pokemon.name} width='130px' height='130px' />
          </SpriteContainer>
        </CardHeader>
        <CardContent>
          <NameContainer>
            <Name>{pokemon.name}</Name>
            <Number>#{pokemon.id}</Number>
          </NameContainer>

          <StatsContainer>
            <Stat>
              <StatIcon><FaRegHeart/></StatIcon>

              <StatNumber>{pokemon.stats.health}</StatNumber>
            </Stat>
            <Stat>
              <StatIcon><GiBroadsword /></StatIcon>

              <StatNumber>{pokemon.stats.attack}</StatNumber>
            </Stat>

            <Stat>
              <StatIcon><BiShield/></StatIcon>

              <StatNumber>{pokemon.stats.defense}</StatNumber>
            </Stat>
          </StatsContainer>

          <TypesContainer>
            {pokemon.types.map((t) => (
              <TypeTag type={t} />
            ))}
          </TypesContainer>
        </CardContent>
      </Card>
    </Link>
  );
}
