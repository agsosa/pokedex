import tw from 'twin.macro';
import * as React from 'react';
import usePokedex from '@/lib/usePokedex';
import PageContainer from '@/components/layout/PageContainer';
import DetailsHeader from '@/components/pokemon/details/DetailsHeader';
import Footer from '@/components/layout/Footer';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationBtn = tw.a`
disabled:opacity-50
flex items-center justify-center space-x-2
rounded-lg border border-gray-800 
text-gray-800 text-lg font-semibold 
px-3 py-1 
hocus:outline-none cursor-pointer
transition duration-300 hover:bg-gray-800 hover:text-gray-100`;

const ContentContainer = tw.section`flex justify-between items-center h-full z-10 p-5 px-10 w-full`;

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

  const previousButton = (
    <Link href={`/details/${pokemon.id - 1}`}>
      <NavigationBtn>
        <AiOutlineArrowLeft />
        <span>Anterior</span>
      </NavigationBtn>
    </Link>
  );

  const nextButton = (
    <Link href={`/details/${pokemon.id + 1}`}>
      <NavigationBtn>
        <span>Siguiente</span>
        <AiOutlineArrowRight />
      </NavigationBtn>
    </Link>
  );

  // TODO: Add next button ID limit condition
  
  return (
    <PageContainer>
      {pokemon.id != null && <DetailsHeader pokemon={pokemon} />}

      <ContentContainer>
        {pokemon.id > 1 && previousButton}

        <div>{pokemon.sprite}</div>

        {nextButton}
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
