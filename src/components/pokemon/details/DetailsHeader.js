import tw from 'twin.macro';
import * as React from 'react';
import Image from 'next/image';
import { usePalette } from 'react-palette';
import { getPokemonSprite } from '@/lib/API';
import TitleBar from '@/components/pokemon/details/TitleBar';
import styles from '@/styles/Details.module.css';
import { motion } from 'framer-motion';

const Header = tw.div`w-full flex flex-col justify-between items-center relative `;

const BackgroundColor = tw.div`h-full w-full absolute filter contrast-125`;
const BackgroundGradient = tw.div`absolute bottom-0 bg-gradient-to-t from-gray-100 w-full h-3/6`;
const SpriteContainer = tw(motion.div)`absolute mt-24 z-20`;

export default function DetailsHeader({ pokemon }) {
  // Pokemon sprite state
  const sprite = getPokemonSprite(pokemon.id)
  const { data: imgData, loading, error } = usePalette(sprite); // Get pokemon's sprite colors

  return (
    <Header>
      <TitleBar pokemon={pokemon} />
      <BackgroundColor className={styles.rounded} style={{ backgroundColor: imgData?.vibrant }} />
      <BackgroundGradient />
      <SpriteContainer
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}>
        {sprite && <Image src={sprite} alt={pokemon.name} width='300px' height='300px' />}
      </SpriteContainer>
    </Header>
  );
}
