import * as React from 'react';
import { getPokemonDetails, getAbilitiesData } from '@/lib/API';
import PokemonDetails from '@/components/pokemon/details';

export default function DetailsPage({pokemon}) {
  if (!pokemon) return null;

  return <PokemonDetails pokemon={pokemon} />;
}

/*
  TODO: Move to getStaticPaths/getStaticProps (needs to get all valid pokemon ids )
*/

export async function getServerSideProps(context) {
  const { id } = context.params;

  const details = await getPokemonDetails(parseInt(id));
  if (details.error) return { notFound: true }

  const abilities = await getAbilitiesData(details.data.abilities);

  details.data.abilitiesData = abilities.data;

  return {
    props: { pokemon: details.data },
  };
}