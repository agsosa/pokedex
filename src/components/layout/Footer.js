// Footer component with tech stack icons

import { memo } from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import LanguageSelector from '@/components/common/LanguageSelector';

const Footer = tw.footer`
bg-gray-100 border-t border-black border-opacity-10 
w-full py-10 px-14 mt-auto
flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center justify-between`;

const Left = tw.span`text-xl md:text-lg font-semibold 
flex flex-col space-y-3 justify-center items-center md:flex-row md:space-y-0 md:space-x-4`;
const YearText = tw.span`ml-1 text-gray-400 text-base font-normal`;

const Right = tw.span`flex space-x-3 justify-center items-center text-gray-800`;
const TechContainer = tw.div`grid grid-cols-4 gap-3`;
const TechText = tw.span`hidden md:flex`;

const Img = tw(Image)`opacity-50 hover:opacity-90 transition duration-500`;

const techIconSize = { width: 34, height: 30 };

// Array of techs to display
const techs = [
  { name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', image: '/js.webp' },
  { name: 'React.js', url: 'https://reactjs.org/', image: '/reactjs.webp' },
  { name: 'Next.js', url: 'https://nextjs.org/', image: '/nextjs.webp' },
  { name: 'TailwindCSS', url: 'https://tailwindcss.com/', image: '/tailwind.webp' },
];

const FooterComponent = memo(() => {
  const { t } = useTranslation('common');

  // Localized strings
  const strings = {
    createdWith: t('created-with'),
  };

  return (
    <Footer>
      <Left>
        <span>Alejandro Sosa <YearText>© {new Date().getFullYear()}</YearText></span>
        <LanguageSelector />
      </Left>
      <Right>
        <TechText>{strings.createdWith}</TechText>
        <TechContainer>
          {/* Map the techs array to images */}
          {techs.map((t) => (
            <Tooltip key={t.name} label={t.name} placement='top'>
              <a href={t.url} target='_blank' rel='noreferrer'>
                <Img src={t.image} {...techIconSize} />
              </a>
            </Tooltip>
          ))}
        </TechContainer>
      </Right>
    </Footer>
  );
});

export default FooterComponent;
