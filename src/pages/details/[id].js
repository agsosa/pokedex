import tw from 'twin.macro';
import * as React from 'react';
import Image from 'next/image';
import { usePalette } from 'react-palette';
import usePokedex from '@/lib/usePokedex';
import PageContainer from '@/components/layout/PageContainer';
import TitleBar from '@/components/pokemon/details/TitleBar';
import DetailsHeader from '@/components/pokemon/details/DetailsHeader';
import Footer from '@/components/layout/Footer';

import MainContainer from '@/components/layout/MainContainer';
import styles from '@/styles/Details.module.css';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Header = tw.div`w-full flex flex-col justify-between items-center relative `;

const NavigationBtn = tw.button`rounded-lg  text-white text-lg font-semibold p-5`;


export default function DetailsPage() {
  const router = useRouter();
  const { getPokemonDetails, getPokemonSprite } = usePokedex();
  const [pokemon, setPokemon] = React.useState({});
  
  const fetchData = async () => {
    const result = await getPokemonDetails(parseInt(router.query.id));

    if (!result.error) setPokemon(result.data);
  };

  React.useEffect(() => {
    fetchData();
  }, [router.query.id]);



  return (
    <PageContainer>
      {pokemon.id != null && <DetailsHeader pokemon={pokemon} />}
      <div tw='flex justify-between items-center h-full z-10 p-5 px-10 w-full'>
        <NavigationBtn>Anterior</NavigationBtn>
        <div>{pokemon.sprite}</div>
        <NavigationBtn>Siguiente</NavigationBtn>
      </div>

      <Footer />
    </PageContainer>
  );
}
