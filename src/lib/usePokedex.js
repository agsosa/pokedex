import axios from 'axios';

// TODO: Hook is not needed, transform to service

export default function usePokedex() {
  const BASE_URL = 'https://pokeapi.co'; // TODO: use process.env

  const ENTRIES_PER_PAGE = 8;// TODO: use process.env

  const getPokemons = async (page = 1) => {
    const URL = BASE_URL + `/api/v2/pokemon?limit=${ENTRIES_PER_PAGE}&offset=${(page - 1) * ENTRIES_PER_PAGE}`;

    try {
      const { data } = await axios.get(URL);
      return { error: false, data: data.results };
    } catch (error) {
      return { error, data: null };
    }
  };

  const getPokemonDetails = async (id_or_name) => {
    const URL = `${BASE_URL}/api/v2/pokemon/${id_or_name}`;

    try {
      const { data } = await axios.get(URL);

      return { error: false, data };
    } catch (error) {
      return { error, data: null };
    }
  };

  const getAbilityData = async (id_or_name) => {
    const URL = `${BASE_URL}/api/v2/ability/${id_or_name}`;

    try {
      const { data } = await axios.get(URL);

      return { error: false, data };
    } catch (error) {
      return { error, data: null };
    }
  };

  const getAbilitiesData = async (abilities) => {
    const promises = [];
    const result = [];

    for (let a of abilities) {
      // For each ability in the list, fetch the details and save the promise in our promises array
      promises.push(
        getAbilityData(a.ability.name).then((details) => {
          if (details.error) return details;

          result.push(details.data); // Save the ability details in our result array
        })
      );
    }

    // Wait for all the ability details promises
    await Promise.allSettled(promises);

    result.sort((a, b) => a.id - b.id);

    // Resolve
    return { error: false, data: result };
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

    result.sort((a, b) => a.id - b.id);

    // Resolve
    return { error: false, data: result };
  };

  const getPokemonSprite = (id) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  return {
    getPokemons,
    getPokemonDetails,
    getPokemonsWithDetails,
    getPokemonSprite,
    getAbilityData,
    getAbilitiesData,
  };
}
