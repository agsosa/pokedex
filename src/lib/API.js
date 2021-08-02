/*
  Aasync methods in this module always resolve with an object 
  { 
    error: boolean (true if the request failed), 
    data: any (error object if the request failed, otherwise the expected data from the endpoint) 
  }
*/

import axios from 'axios';

const BASE_URL = 'https://pokeapi.co'; // TODO: use process.env
export const ENTRIES_PER_PAGE = 8; // TODO: use process.env

// Get a list of pokemons (paginated)
export const getPokemons = async (page = 1) => {
  const URL = BASE_URL + `/api/v2/pokemon?limit=${ENTRIES_PER_PAGE}&offset=${(page - 1) * ENTRIES_PER_PAGE}`;

  try {
    const { data } = await axios.get(URL);
    return { error: false, data: data.results };
  } catch (error) {
    return { error, data: error };
  }
};

// Get the total pokemons count
export const getTotalPokemonsCount = async () => {
  const URL = BASE_URL + `/api/v2/pokemon?limit=1`;

  try {
    const { data } = await axios.get(URL);
    return { error: false, data: data.count };
  } catch (error) {
    return { error, data: error };
  }
}

// Get the details about a pokemon by id or name
export const getPokemonDetails = async (id_or_name) => {
  const URL = `${BASE_URL}/api/v2/pokemon/${id_or_name}`;

  try {
    const { data } = await axios.get(URL);

    return { error: false, data };
  } catch (error) {
    return { error, data: error };
  }
};

// Get the details about an ability by id or name
export const getAbilityData = async (id_or_name) => {
  const URL = `${BASE_URL}/api/v2/ability/${id_or_name}`;

  try {
    const { data } = await axios.get(URL);

    return { error: false, data };
  } catch (error) {
    return { error, data: error };
  }
};

// Get the details for every ability in an array
export const getAbilitiesData = async (abilities) => {
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

// Get a list of pokemons with details
export const getPokemonsWithDetails = async (page = 1) => {
  const promises = [];
  const result = [];

  // Get pokemons list
  const list = await getPokemons(page);
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

// Returns a pokemon image URL
export const getPokemonSprite = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;