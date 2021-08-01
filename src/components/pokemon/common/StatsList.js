import * as React from 'react';
import tw from 'twin.macro';
import { GiBroadsword } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { BiShield } from 'react-icons/bi';

const StatsContainer = tw.div`flex space-x-2 divide-x-2`;

const Stat = tw.div`flex space-x-2 justify-center items-center w-full px-3`;
const StatNumber = tw.span`font-bold text-xl`;
const StatIcon = tw.span`text-gray-600 text-lg`;

export default function StatsList({ pokemon, extended = false }) {
  const health = React.useMemo(() => pokemon.stats.find((s) => s.stat.name === 'hp').base_stat, [pokemon]); // memoize hp
  const attack = React.useMemo(() => pokemon.stats.find((s) => s.stat.name === 'attack').base_stat, [pokemon]); // memoize attack
  const defense = React.useMemo(() => pokemon.stats.find((s) => s.stat.name === 'defense').base_stat, [pokemon]); // memoize defense

  return (
    <StatsContainer>
      <Stat>
        <StatIcon>
          <FaRegHeart />
        </StatIcon>

        <StatNumber>{health}</StatNumber>
      </Stat>
      <Stat>
        <StatIcon>
          <GiBroadsword />
        </StatIcon>

        <StatNumber>{attack}</StatNumber>
      </Stat>

      <Stat>
        <StatIcon>
          <BiShield />
        </StatIcon>

        <StatNumber>{defense}</StatNumber>
      </Stat>
    </StatsContainer>
  );
}
