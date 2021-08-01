import * as React from 'react';
import tw from 'twin.macro';

import { getPokemonsWithDetails, getTotalPokemonsCount, ENTRIES_PER_PAGE } from '@/lib/API';

import PokemonsList from '@/components/pokemon/list';
import PageContainer from '@/components/layout/PageContainer';
import MainContainer from '@/components/layout/MainContainer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Pagination from '@/components/common/Pagination';
import { useRouter } from 'next/router';

export default function ListPage({ pokemons, totalPokemons, maxPages, page }) {
  const router = useRouter();

  const handlePreviousPage = () => {
    router.push(`/pokemons/list/${parseInt(page) - 1}`);
  };

  const handleNextPage = () => {
    router.push(`/pokemons/list/${parseInt(page) + 1}`);
  };

  const handlePageJump = (page) => {
    router.push(`/pokemons/list/${page}`);
  };

  return (
    <PageContainer>
      <Header totalPokemons={totalPokemons} />

      <MainContainer>
        <PokemonsList pokemons={pokemons} />
        <Pagination
          totalPages={maxPages}
          page={page}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          onPageJump={handlePageJump}
        />
      </MainContainer>

      <Footer />
    </PageContainer>
  );
}

export async function getStaticPaths() {
  const { data } = await getTotalPokemonsCount();

  const maxPages = Math.floor(data / ENTRIES_PER_PAGE);
  const pagesToGo = Array.from({ length: maxPages }, (v, i) => i + 1);
  const paths = pagesToGo.map((p) => ({
    params: {
      page: p.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { page } = context.params;

  const pokemonList = await getPokemonsWithDetails(page);
  const count = await getTotalPokemonsCount();
  const maxPages = Math.floor(count.data / ENTRIES_PER_PAGE);

  return {
    props: { pokemons: pokemonList.data, totalPokemons: count.data, maxPages, page },
  };
}
