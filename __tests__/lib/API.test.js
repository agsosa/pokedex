import '@testing-library/jest-dom';
import pokemon_details from '../mocks/pokemon_details.json';
import ability_details from '../mocks/ability_details.json';
import pokemons_list from '../mocks/pokemons_list.json';

import * as API from '@/lib/API';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(axios, { onNoMatch: 'throwException' });

const pokemonId = 1;

describe('API module', () => {
  beforeEach(() => {
    axiosMock.resetHandlers();
  });

  it('should get correct pokemon details', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon/${pokemonId}`).reply(200, pokemon_details);

    const result = await API.getPokemonDetails(pokemonId);

    expect(result).toEqual(
      expect.objectContaining({
        error: false,
        data: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          abilities: expect.any(Array),
          stats: expect.any(Array),
          types: expect.any(Array),
        }),
      })
    );
  });

  it('should get pokemons list', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=${API.ENTRIES_PER_PAGE}&offset=0`).reply(200, pokemons_list);

    const result = await API.getPokemons();

    expect(result).toEqual(
      expect.objectContaining({
        error: false,
        data: expect.arrayContaining([
          expect.objectContaining({
            name: expect.any(String),
          }),
        ]),
      })
    );

    expect(result.data.length).toBeGreaterThan(1);
  });

  it('should get pokemons list with details', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=${API.ENTRIES_PER_PAGE}&offset=0`).reply(200, pokemons_list);
    axiosMock.onGet(new RegExp(`${API.BASE_URL}/api/v2/pokemon/*`)).reply(200, pokemon_details);

    const result = await API.getPokemonsWithDetails();

    expect(result).toEqual(
      expect.objectContaining({
        error: false,
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            abilities: expect.any(Array),
            types: expect.any(Array),
            weight: expect.any(Number),
            height: expect.any(Number),
            base_experience: expect.any(Number),
          }),
        ]),
      })
    );

    expect(result.data.length).toBeGreaterThan(1);
  });

  it('should get correct abilities data', async () => {
    axiosMock.onGet(new RegExp(`${API.BASE_URL}/api/v2/ability/*`)).reply(200, ability_details);

    const result = await API.getAbilitiesData(pokemon_details.abilities);

    expect(result).toEqual(
      expect.objectContaining({
        error: false,
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
          }),
        ]),
      })
    );
  });

  it('should get correct pokemon count', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=1`).reply(200, pokemons_list);

    const result = await API.getTotalPokemonsCount();

    expect(result).toEqual(
      expect.objectContaining({
        error: false,
        data: pokemons_list.count,
      })
    );
  });

  it('should respond with error', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=${API.ENTRIES_PER_PAGE}&offset=0`).reply(404);

    const result = await API.getPokemons();

    expect(result).toEqual(
      expect.objectContaining({
        error: expect.anything(),
        data: expect.any(Error),
      })
    );
  });

  it('should respond with error', async () => {
    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=${API.ENTRIES_PER_PAGE}&offset=0`).reply(404, pokemons_list);
    axiosMock.onGet(new RegExp(`${API.BASE_URL}/api/v2/pokemon/*`)).reply(404, pokemon_details);

    const result = await API.getPokemonsWithDetails();

    expect(result).toEqual(
      expect.objectContaining({
        error: expect.anything(),
        data: expect.any(Error),
      })
    );
  });
});
