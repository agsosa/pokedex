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
  let health = 0, attack = 0, defense = 0, specialAttack = 0, specialDefense = 0, speed = 0;
  
  for (let stat of pokemon.stats) {
    const { base_stat } = stat;

    switch (stat.stat.name) {
      case "hp": health = base_stat; break;
      case "attack": attack = base_stat; break;
      case "defense": defense = base_stat; break;
      case "special-attack": specialAttack = base_stat; break;
      case "special-defense": specialDefense = base_stat; break;
      case "speed": speed = base_stat; break;
    }
  }
  
  const stats = [
    { icon: <FaRegHeart />, name: 'Health', value: health },
    { icon: <GiBroadsword />, name: 'Attack', value: attack },
    { icon: <BiShield />, name: 'Defense', value: defense },
    { icon: <GiBroadsword />, name: 'Special Attack', value: specialAttack, extended: true },
    { icon: <BiShield />, name: 'Special Defense', value: specialDefense, extended: true },
    { icon: <BiShield />, name: 'Speed', value: speed, extended: true },
  ];

  return (
    <StatsContainer>
      {stats.map((s) => {
        if (s.extended && !extended) return null;

        return (
          <Stat>
            <StatIcon>{s.icon}</StatIcon>

            <StatNumber>{s.value}</StatNumber>
          </Stat>
        );
      })}
    </StatsContainer>
  );
}
