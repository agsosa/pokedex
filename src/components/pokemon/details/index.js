// Full page pokemon details component

import tw from 'twin.macro';
import * as React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import DetailsHeader from '@/components/pokemon/details/DetailsHeader';
import Footer from '@/components/layout/Footer';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import Button from '@/components/common/Button';

const ContentContainer = tw.section`flex justify-between items-center h-full z-10 p-5 px-10 w-full`;

export default function DetailsComponent({ pokemon }) {
  // TODO: Add next button ID limit condition
  const previousButton = (
    <Link href={`/details/${pokemon.id - 1}`}>
      <Button left={<AiOutlineArrowLeft />} label='Previous' />
    </Link>
  );

  const nextButton = (
    <Link href={`/details/${pokemon.id + 1}`}>
      <Button right={<AiOutlineArrowRight />} label='Next' />
    </Link>
  );

  return (
    <PageContainer>
      {pokemon.id != null && <DetailsHeader pokemon={pokemon} />}

      <ContentContainer>
        {pokemon.id > 1 && previousButton}

        <div>{pokemon.sprite}</div>

        {nextButton}
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
