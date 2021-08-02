import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import ListPage, { getStaticProps, getStaticPaths } from '@/pages/pokemons/list/[page].js';

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
    ];

    render(<ListPage pokemons={pokemons} totalPokemons={1000} maxPages={132} page={1} />);

    const header = screen.getByText('welcome', { exact: false });
    const main = screen.getByRole('main');
    const footer = screen.getByText('alejandro', { exact: false });

    expect(main).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should get correct static paths', async () => {
    let result;

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
