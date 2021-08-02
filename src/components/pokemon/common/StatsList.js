import * as React from 'react';
import tw, { styled } from 'twin.macro';
import { GiBroadsword, GiSwordArray, GiRosaShield, GiPiercingSword } from 'react-icons/gi';
import { FaRegHeart } from 'react-icons/fa';
import { BiShield } from 'react-icons/bi';
import { Tooltip } from '@chakra-ui/react';

const StatsContainer = styled.div(({extended}) => [tw`grid grid-cols-3`, extended && tw`text-2xl md:text-3xl gap-8 lg:w-1/2`, !extended && tw`gap-2 divide-x-2 text-lg`]);

const Stat = tw.div`flex space-x-2 justify-center items-center w-full px-3`;
const StatNumber = tw.span`font-semibold`;
const StatIcon = tw.span`text-gray-600`;

export default function StatsList({ pokemon, extended = false }) {
  let health = 0,
    attack = 0,
    defense = 0,
    specialAttack = 0,
    specialDefense = 0,
    speed = 0;

  for (let stat of pokemon.stats) {
    const { base_stat } = stat;

    switch (stat.stat.name) {
      case 'hp':
        health = base_stat;
        break;
      case 'attack':
        attack = base_stat;
        break;
      case 'defense':
        defense = base_stat;
        break;
      case 'special-attack':
        specialAttack = base_stat;
        break;
      case 'special-defense':
        specialDefense = base_stat;
        break;
      case 'speed':
        speed = base_stat;
        break;
    }
  }

  const stats = [
    { icon: <FaRegHeart />, name: 'Health', value: health },
    { icon: <GiBroadsword />, name: 'Attack', value: attack },
    { icon: <BiShield />, name: 'Defense', value: defense },
    { icon: <GiPiercingSword />, name: 'Special Attack', value: specialAttack, extended: true },
    { icon: <GiRosaShield />, name: 'Special Defense', value: specialDefense, extended: true },
    { icon: <GiSwordArray />, name: 'Speed', value: speed, extended: true },
  ];

  return (
    <StatsContainer extended={extended}>
      {stats.map((s) => {
        if (s.extended && !extended) return null;

        return (
          <Tooltip key={s.name} label={s.name} placement='top'>
            <Stat>
              <StatIcon>{s.icon}</StatIcon>

              <StatNumber>{s.value}</StatNumber>
            </Stat>
          </Tooltip>
        );
      })}
    </StatsContainer>
  );
}
