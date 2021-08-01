import tw from 'twin.macro';
import LanguageSelector from '@/components/common/LanguageSelector';

const Header = tw.header`flex justify-between items-center w-full pt-8 px-24`;
const Container = tw.div`flex flex-col border-l-2 border-gray-400 px-4`;
const WelcomeText = tw.div`text-3xl text-gray-900 `;
const HintText = tw.span`text-lg`;

export default function HeaderComponent({ totalPokemons = 0 }) {
  return (
    <Header>
      <Container>
        <WelcomeText><b>Welcome!</b> There are {totalPokemons} Pokémons registered in this Pokédex</WelcomeText>
        <HintText>Click on any card to view the details about a Pokémon</HintText>
      </Container>
      <LanguageSelector />
    </Header>
  );
}
