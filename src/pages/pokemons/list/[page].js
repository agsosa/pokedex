// Page to display a list of pokemons with pagination

import * as React from 'react';
import { useRouter } from 'next/router';

import { getPokemonsWithDetails, getTotalPokemonsCount, ENTRIES_PER_PAGE } from '@/lib/API';

import PokemonsList from '@/components/pokemon/list';
import PageContainer from '@/components/layout/PageContainer';
import MainContainer from '@/components/layout/MainContainer';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Pagination from '@/components/common/Pagination';

export default function ListPage({ pokemons, totalPokemons, maxPages, page }) {
  const router = useRouter();

  // On previous page click
  const handlePreviousPage = () => {
    router.push(`/pokemons/list/${parseInt(page) - 1}`);
  };

  // On next page click
  const handleNextPage = () => {
    router.push(`/pokemons/list/${parseInt(page) + 1}`);
  };

  // On page jump
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
          page={parseInt(page)}
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

  // Fetch the total pages count
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

  // Fetch the pokemons list
  const pokemonList = await getPokemonsWithDetails(page);
  const count = await getTotalPokemonsCount();
  const maxPages = Math.floor(count.data / ENTRIES_PER_PAGE);

  return {
    props: { pokemons: pokemonList.data, totalPokemons: count.data, maxPages, page },
  };
}
