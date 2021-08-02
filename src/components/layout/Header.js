import tw from 'twin.macro';
import LanguageSelector from '@/components/common/LanguageSelector';

const Header = tw.header`
flex flex-col space-y-4 lg:flex-row
justify-between items-center 
w-full font-semibold border-b-2 text-gray-700
py-4 px-2 lg:px-8 xl:px-24`;

const WelcomeContainer = tw.div`flex flex-col text-center`;

const WelcomeText = tw.div`flex flex-col lg:flex-row lg:space-x-4 text-2xl xl:text-3xl `;

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
