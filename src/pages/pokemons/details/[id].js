import * as React from 'react';
import { getPokemonDetails, getAbilitiesData } from '@/lib/API';
import { useRouter } from 'next/router';
import PokemonDetails from '@/components/pokemon/details';

export default function DetailsPage() {
  const router = useRouter();
  const [pokemon, setPokemon] = React.useState(null);

  const fetchData = async () => {
    const details = await getPokemonDetails(parseInt(router.query.id));
    if (details.error) return; // TODO: Show error

    const abilities = await getAbilitiesData(details.data.abilities);
    if (abilities.error) return; // TODO: Show error

    details.data.abilitiesData = abilities.data;
    
    setPokemon(details.data);
  };

  React.useEffect(() => {
    fetchData();
  }, [router.query.id]);

  if (!pokemon) return 'No pokemon loaded';

  return <PokemonDetails pokemon={pokemon} />;
}
