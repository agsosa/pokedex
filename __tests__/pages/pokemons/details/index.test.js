import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import DetailsPage, { getServerSideProps } from '@/pages/pokemons/details/[id].js';
import pokemon_details from '../../../mocks/pokemon_details.json';
import * as API from '@/lib/API';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const axiosMock = new MockAdapter(axios, { onNoMatch: 'throwException' });
jest.mock('next/router', () => require('next-router-mock'));

describe('Pokemon details page', () => {
  it('should render', () => {
    const name = 'pikachu';

    const pokemon = {
      id: 1,
      name: 'pikachu',
      stats: [
        {
          stat: {
            name: 'attack',
          },
        },
      ],
      types: [],
      height: 166,
    };

    render(<DetailsPage pokemon={pokemon} />);

    const footer = screen.getByText('alejandro', { exact: false });
    const pName = screen.getByText(name, { exact: false });
    const height = screen.getByText('166');
    const image = screen.getByAltText(name);

    expect(pName).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should get correct server side props', async () => {
    let result;
    const pokemonId = 1;

    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon/${pokemonId}`).reply(200, pokemon_details);
    axiosMock.onGet(`${API.BASE_URL}/api/v2/ability/`).reply(200, pokemon_details);

    result = await getServerSideProps({ params: { id: pokemonId } });

    const { props } = result;

    expect(props).toEqual(
      expect.objectContaining({
        pokemon: expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          abilities: expect.any(Array),
          abilitiesData: expect.any(Array),
          stats: expect.any(Array),
          types: expect.any(Array),
        }),
      })
    );
  });

  it('should return 404', async () => {
    let result;
    const pokemonId = 1;

    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon/${pokemonId}`).reply(404);

    result = await getServerSideProps({ params: { id: pokemonId } });

    expect(result).toEqual(
      expect.objectContaining({
        notFound: true,
      })
    );
  });
});
