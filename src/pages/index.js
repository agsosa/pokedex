import * as React from 'react';
import tw from 'twin.macro';

import usePokedex from '@/lib/usePokedex';

import PokemonsList from '@/components/pokemon/list';
import PageContainer from '@/components/layout/PageContainer';
import MainContainer from '@/components/layout/MainContainer';
import Footer from '@/components/layout/Footer';

export default function Home() {
  const { getPokemonsWithDetails } = usePokedex();
  const [data, setData] = React.useState([]);

  const fetchPokemons = async () => {
    const list = await getPokemonsWithDetails();

    if (!list.error) setData(list.data);
    else console.log(list.error); // TODO show error or something
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PageContainer>
      <MainContainer>
        <PokemonsList pokemons={data} />
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}
