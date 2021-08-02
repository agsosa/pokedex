// Component to select the preferred language

import tw from 'twin.macro';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MainContainer = tw.div`flex space-x-2 justify-center items-center`;

export default function LanguageSelector() {
  const router = useRouter();

  return (
    <MainContainer>
      <Link passHref href={router.asPath} locale='en'>
        <Button left={<Image src='/english.svg' height='15px' width='15px' alt='English' />} label='English' />
      </Link>
      <span>-</span>
      <Link passHref href={router.asPath} locale='es'>
        <Button left={<Image src='/spanish.svg' height='15px' width='15px' alt='Español' />} label='Español' />
      </Link>
    </MainContainer>
  );
}
