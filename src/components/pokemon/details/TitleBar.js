import tw from 'twin.macro';
import * as React from 'react';
import styles from '@/styles/Details.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from 'next/link';

const TitleBar = tw.div`
flex justify-between items-center 
text-white
w-full z-10
mb-80
lg:px-20 lg:py-2`;

const HomeBtn = tw.a`flex font-semibold text-2xl cursor-pointer`;

const Left = tw.div`flex lg:flex-col lg:space-x-0 space-x-4 items-center justify-center`;
const Right = tw.span`font-bold text-4xl`;

const Name = tw.h1`font-bold capitalize rounded-lg lg:text-6xl`;

export default function TitleBarComponent({ pokemon }) {
  return (
    <TitleBar className={styles.stroke}>
      <Left>
        <Link href='/'>
          <HomeBtn className={styles.stroke}>« Pokedex</HomeBtn>
        </Link>
        <Name>{pokemon.name}</Name>
      </Left>

      <Right>#{pokemon.id}</Right>
    </TitleBar>
  );
}
