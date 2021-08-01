import * as React from 'react';
import usePokedex from '@/lib/usePokedex';
import { useRouter } from 'next/router';
import PokemonDetails from '@/components/pokemon/details';

export default function DetailsPage() {
  const router = useRouter();
  const { getPokemonDetails } = usePokedex();
  const [pokemon, setPokemon] = React.useState({});

  const fetchData = async () => {
    const result = await getPokemonDetails(parseInt(router.query.id));

    if (!result.error) setPokemon(result.data);
  };

  React.useEffect(() => {
    fetchData();
  }, [router.query.id]);

  return <PokemonDetails pokemon={pokemon} />;
}
