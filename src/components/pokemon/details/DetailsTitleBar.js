// Title bar for our pokemon details page

import tw from 'twin.macro';
import * as React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';

import styles from '@/styles/Details.module.css';

const TitleBar = tw.div`
flex justify-between items-center 
text-white
w-full z-10
mb-80
px-5 sm:px-10 lg:px-20 py-2`;

const HomeBtn = tw.a`flex font-semibold text-xl md:text-2xl cursor-pointer`;

const Left = tw.div`
flex sm:flex-col lg:space-x-0 space-x-4 
items-center justify-center`;

const Right = tw.span`font-bold text-2xl md:text-4xl`;

const Name = tw.h1`font-bold capitalize rounded-lg text-2xl sm:text-4xl lg:text-6xl`;

export default function TitleBarComponent({ pokemon }) {
  return (
    <TitleBar className={styles.stroke}>
      <Left>
        <Link passHref href='/pokemons/list/1'>
          <HomeBtn className={styles.stroke}>« Pokedex</HomeBtn>
        </Link>
        <Name>{pokemon.name}</Name>
      </Left>

      <Right>#{pokemon.id}</Right>
    </TitleBar>
  );
}

TitleBarComponent.propTypes = {
  pokemon: propTypes.shape({id: propTypes.number, name: propTypes.string}).isRequired
}