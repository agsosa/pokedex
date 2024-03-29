// Simple header component

import tw from 'twin.macro';
import LanguageSelector from '@/components/common/LanguageSelector';
import useTranslation from 'next-translate/useTranslation';
import propTypes from 'prop-types';

const Header = tw.header`
flex flex-col space-y-4 lg:flex-row
justify-between items-center 
w-full font-semibold border-b-2 text-gray-700
py-4 px-2 lg:px-8 xl:px-24`;

const WelcomeText = tw.div`flex flex-col 2xl:flex-row lg:space-x-4 text-xl lg:text-2xl xl:text-3xl text-center`;

export default function HeaderComponent({ totalPokemons = 0 }) {
  const { t } = useTranslation('common');

  // Localized strings
  const strings = {
    welcome: t('welcome'),
    registered: t('registered-pokemons', {count: totalPokemons}),
  };

  return (
    <Header>
      <div>
        <WelcomeText><b>{strings.welcome}</b> <span>{strings.registered}</span></WelcomeText>
      </div>
      <LanguageSelector />
    </Header>
  );
}

HeaderComponent.defaultProps = {
  totalPokemons: 0
}

HeaderComponent.proptYpes = {
  totalPokemons: propTypes.number,
}