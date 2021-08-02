import * as React from 'react';
import { getPokemonDetails, getAbilitiesData, getTotalPokemonsCount } from '@/lib/API';
import PokemonDetails from '@/components/pokemon/details';

export default function DetailsPage({pokemon}) {
  if (!pokemon) return 'No pokemon found';

  return <PokemonDetails pokemon={pokemon} />;
}

export async function getStaticPaths() {
  const { data } = await getTotalPokemonsCount();

  const pagesToGo = Array.from({ length: data }, (v, i) => i + 1);
  const paths = pagesToGo.map((p) => ({
    params: {
      id: p.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const details = await getPokemonDetails(parseInt(id));
  const abilities = await getAbilitiesData(details.data.abilities);

  details.data.abilitiesData = abilities.data;

  return {
    props: { pokemon: details.data },
  };
}