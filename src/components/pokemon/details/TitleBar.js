import tw from 'twin.macro';
import * as React from 'react';
import styles from '@/styles/Details.module.css';

const TitleBar = tw.div`
flex justify-between items-center 
text-white
w-full z-10
mb-80
lg:px-20 lg:py-2`;

const HomeBtn = tw.button`text-2xl font-semibold`;

export default function TitleBarComponent({ pokemon }) {
  return (
    <TitleBar className={styles.stroke}>
      <div tw='flex lg:flex-col lg:space-x-0 space-x-4 items-center justify-center'>
        <HomeBtn className={styles.stroke}>Pokedex</HomeBtn>
        <h1 tw='font-bold capitalize rounded-lg lg:text-6xl'>{pokemon.name}</h1>
      </div>

      <span tw='font-bold text-4xl'>#{pokemon.id}</span>
    </TitleBar>
  );
}
