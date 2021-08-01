import tw from 'twin.macro';
import LanguageSelector from '@/components/common/LanguageSelector';

const Header = tw.header`
flex flex-col space-y-4 lg:flex-row
justify-between items-center 
w-full 
pt-8 px-2 lg:px-8 xl:px-24`;

const WelcomeContainer = tw.div`flex flex-col text-center`;

const WelcomeText = tw.div`flex flex-col lg:flex-row lg:space-x-4 text-2xl xl:text-3xl text-gray-900 `;

export default function HeaderComponent({ totalPokemons = 0 }) {
  return (
    <Header>
      <WelcomeContainer>
        <WelcomeText><b>Welcome!</b> <span>There are {totalPokemons} Pokémons registered in this Pokédex</span></WelcomeText>
      </WelcomeContainer>
      <LanguageSelector />
    </Header>
  );
}
