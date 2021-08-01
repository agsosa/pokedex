import tw from 'twin.macro';
import Image from 'next/image';

const MainContainer = tw.div`flex space-x-2 items-center`;

const LanguageBtn = tw.button`flex items-center justify-center space-x-2 px-2 py-1 transition duration-500 hocus:outline-none hover:bg-gray-200 rounded-lg`;

export default function LanguageSelector() {
  return (
    <MainContainer>
      <LanguageBtn>
        <Image src='/english.svg' height='15px' width='15px' /> <span>English</span>
      </LanguageBtn>
      <span>-</span>
      <LanguageBtn>
        <Image src='/spanish.svg' height='15px' width='15px' /> <span>Spanish</span>
      </LanguageBtn>
    </MainContainer>
  );
}
