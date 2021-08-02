import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import ListPage, { getStaticProps, getStaticPaths } from '@/pages/pokemons/list/[page].js';
import * as API from '@/lib/API';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import pokemons_list from '../../../mocks/pokemons_list.json';

const axiosMock = new MockAdapter(axios, { onNoMatch: 'throwException' });
jest.mock('next/router', () => require('next-router-mock'));

describe('Pokemons list page', () => {
  it('should render', () => {
    const pokemons = [
      {
        id: 1,
        name: 'p1',
        stats: [],
        types: [],
      },
      {
        id: 2,
        name: 'p2',
        stats: [],
        types: [],
      },
    ];

    render(<ListPage pokemons={pokemons} totalPokemons={1000} maxPages={132} page={1} />);

    const header = screen.getByText('welcome', { exact: false });
    const main = screen.getByRole('main');
    const footer = screen.getByText('alejandro', { exact: false });
    const pokemon1 = screen.getByText('p1', { exact: true });
    const pokemon2 = screen.getByText('p2', { exact: true });

    expect(main).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(pokemon1).toBeInTheDocument();
    expect(pokemon2).toBeInTheDocument();
  });

  it('should get correct static paths', async () => {
    let result;

    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=1`).reply(200, pokemons_list);

    await act(async () => {
      result = await getStaticPaths();
    });

    const { paths } = result;

    expect(paths).toEqual(
      expect.arrayContaining([{
        params: expect.objectContaining({ page: expect.any(String) }),
      }])
    );
  });

  it('should get correct static props', async () => {
    let result;

    axiosMock.onGet(`${API.BASE_URL}/api/v2/pokemon?limit=${API.ENTRIES_PER_PAGE}&offset=0`).reply(200, pokemons_list);

    await act(async () => {
      result = await getStaticProps({ params: { page: 1 } });
    });

    const { props } = result;

    expect(props).toEqual(
      expect.objectContaining({
        maxPages: expect.any(Number),
        page: expect.any(Number),
        totalPokemons: expect.any(Number),
        pokemons: expect.any(Array),
      })
    );
  });
});
