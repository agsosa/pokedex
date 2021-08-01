import axios from 'axios';

export default function usePokedex() {
  const getPokemons = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';

    try {
      const { data } = await axios.get(URL);
      return { error: false, data: data.results };
    } catch (error) {
      return { error, data: null };
    }
  };

  const getPokemonDetails = async (id_or_name) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id_or_name}`;

    try {
      const { data } = await axios.get(URL);

      const resultData = {
        id: data.id,
        name: data.name,
        sprite: data.sprites?.other?.dream_world?.front_default,
        stats: {
          health: data.stats[0]?.base_stat,
          attack: data.stats[1]?.base_stat,
          defense: data.stats[2]?.base_stat,
        },
        types: data.types.map((t) => t.type.name),
      };

      return { error: false, data: resultData };
    } catch (error) {
      return { error, data: null };
    }
  };

  const getPokemonsWithDetails = async () => {
    const promises = [];
    const result = [];

    // Get pokemons list
    const list = await getPokemons();
    if (list.error) return list;

    for (let pokemon of list.data) {
      // For each pokemon in the list, fetch the details and save the promise in our promises array
      promises.push(
        getPokemonDetails(pokemon.name).then((details) => {
          if (details.error) return details;

          result.push(details.data); // Save the details in our result array
        })
      );
    }

    // Wait for all the pokemon details promises
    await Promise.allSettled(promises);

    // Resolve
    return { error: false, data: result };
  };

  return {
    getPokemons,
    getPokemonDetails,
    getPokemonsWithDetails,
  };
}
