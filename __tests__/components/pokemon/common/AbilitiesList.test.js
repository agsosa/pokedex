import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AbilitiesList from '@/components/pokemon/common/AbilitiesList';

describe('Abilities list component', () => {
  it('should render the abilities', () => {
    const pokemon = {
      abilitiesData: [
        { id: 1, name: 'ability1' },
        { id: 2, name: 'ability2' },
      ],
    };

    render(<AbilitiesList pokemon={pokemon} />);

    const ability1 = screen.getByText('ability1', { exact: false });
    const ability2 = screen.getByText('ability2', { exact: false });

    expect(ability1).toBeInTheDocument();
    expect(ability2).toBeInTheDocument();
  });

  it('should render no abilities text', () => {
    const pokemon = {
      abilitiesData: [],
    };

    render(<AbilitiesList pokemon={pokemon} />);

    const elem = screen.getByText('no-abilities', { exact: false });

    expect(elem).toBeInTheDocument();
  });
});
