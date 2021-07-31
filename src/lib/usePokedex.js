import axios from 'axios';

export default function usePokedex() {
  const getPokemons = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon';

    return new Promise((resolve) =>
      axios
        .get(URL)
        .then(({ data }) => resolve({ error: false, data: data.results }))
        .catch((error) => resolve({ error, data: null }))
    );
  };
  1;

  const getPokemonDetails = (id_or_name) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id_or_name}`;

    return new Promise((resolve) =>
      axios
        .get(URL)
        .then(({ data }) => resolve({ error: false, data }))
        .catch((error) => resolve({ error, data: null }))
    );
  };

  return {
    getPokemons,
    getPokemonDetails,
  };
}
