import tw from 'twin.macro';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import Button from './Button';
import Link from 'next/link';
import {useRouter} from 'next/router';

const MainContainer = tw.div`flex space-x-2 justify-center items-center`;

const LanguageBtn = tw.button`flex items-center justify-center space-x-2 px-2 py-1 text-gray-800
transition duration-500 hocus:outline-none hover:bg-gray-600 hover:text-gray-200 rounded-lg`;

export default function LanguageSelector({ hideLabels }) {
  const router = useRouter();
  const { t, lang } = useTranslation();

  return (
    <MainContainer>
      <Link href={router.asPath} locale="en"><Button left={<Image src='/english.svg' height='15px' width='15px' />} label={hideLabels ? '' : 'English'} /></Link>
      <span>-</span>
      <Link href={router.asPath} locale="es"><Button left={<Image src='/spanish.svg' height='15px' width='15px' />} label={hideLabels ? '' : 'Español'} /></Link>
    </MainContainer>
  );
}
