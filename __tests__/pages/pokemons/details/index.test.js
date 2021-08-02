import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import DetailsPage, { getServerSideProps } from '@/pages/pokemons/details/[id].js';

jest.mock('next/router', () => require('next-router-mock'));

describe('Pokemon details page', () => {
  it('should render', () => {
    const name = "pikachu";
    
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
    const height = screen.getByText("166");
    const image = screen.getByAltText(name);

    expect(pName).toBeInTheDocument();
    expect(height).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should get correct server side props', async () => {
    let result;

    await act(async () => {
      result = await getServerSideProps({ params: { id: 1 } });
    });

    const { props } = result;

    expect(props).toEqual(
      expect.objectContaining({
        pokemon: expect.objectContaining({ id: expect.any(Number) }),
      })
    );
  });
});
