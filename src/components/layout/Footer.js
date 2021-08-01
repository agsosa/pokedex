// Footer component with tech stack icons

import { memo } from 'react';
import tw from 'twin.macro';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react';

const Footer = tw.footer`mt-auto bg-gray-100 border-t border-black border-opacity-10 w-full py-10 px-14 flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between`;

const Left = tw.span`text-xl md:text-lg font-semibold flex justify-center items-center space-x-4`;
const YearText = tw.span`ml-1 text-gray-400 text-base font-normal`;

const Right = tw.span`flex space-x-3 justify-center items-center text-gray-800`;
const TechContainer = tw.div`grid grid-cols-4 gap-3`;
const TechText = tw.span`hidden md:flex`;

const Img = tw(Image)`opacity-50 hover:opacity-90 transition duration-500`;

const techIconSize = { width: 34, height: 30 };

const techs = [
  { name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript', image: '/js.webp' },
  { name: 'React.js', url: 'https://reactjs.org/', image: '/reactjs.webp' },
  { name: 'Next.js', url: 'https://nextjs.org/', image: '/nextjs.webp' },
  { name: 'TailwindCSS', url: 'https://tailwindcss.com/', image: '/tailwind.webp' },
];

const FooterComponent = memo(() => {
  return (
    <Footer>
      <Left>
        Alejandro Sosa <YearText>© {new Date().getFullYear()}</YearText>
      </Left>
      <Right>
        <TechText>Created with</TechText>
        <TechContainer>
          {/* Map the techs array to images */}
          {techs.map((t) => (
            <Tooltip key={t.name} label={t.name} placement='top'>
              <a href={t.url} target='_blank' rel="noreferrer">
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