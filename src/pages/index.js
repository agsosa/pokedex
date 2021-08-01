import * as React from 'react';
import tw from 'twin.macro';

import usePokedex from '@/lib/usePokedex';

import Card from '@/components/pokemon/Card';
import PageContainer from '@/components/layout/PageContainer';
import MainContainer from '@/components/layout/MainContainer';
import Footer from '@/components/layout/Footer';

const CardsContainer = tw.div`grid grid-cols-4 gap-10 justify-center items-center w-full`;

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
        <CardsContainer>
          {Array.isArray(data) && data.length > 0 && data.map((d) => <Card pokemon={d} />)}
        </CardsContainer>
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}
