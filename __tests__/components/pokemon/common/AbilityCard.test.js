import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AbilityCard from '@/components/pokemon/common/AbilityCard';

jest.mock('next-translate/useTranslation', () => {
  return jest.fn(() => ({
     lang: "en",
     t: jest.fn()
  }))
})

describe('Ability card component', () => {
  it('should render the ability info', () => {
    const ability = {
      id: 1,
      name: 'ability1',
      flavor_text_entries: [{ language: { name: 'en' }, flavor_text: 'ability_description' }],
    };

    render(<AbilityCard ability={ability} />);

    const name = screen.getByText('ability1', { exact: false });
    const desc = screen.getByText('ability_description', { exact: false });

    expect(name).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
});
