// Full page pokemon details component

import tw from 'twin.macro';
import * as React from 'react';
import PageContainer from '@/components/layout/PageContainer';
import DetailsHeader from '@/components/pokemon/details/DetailsHeader';
import Footer from '@/components/layout/Footer';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import Button from '@/components/common/Button';
import StatsList from '@/components/pokemon/common/StatsList';
import TypesList from '@/components/pokemon/common/TypesList';
import AbilitiesList from '@/components/pokemon/common/AbilitiesList';

const ContentContainer = tw.section`flex justify-between items-center h-full z-10 pt-10 pb-16 px-40 w-full`;

const DetailsGrid = tw.div`grid grid-cols-2 gap-10 w-full items-start justify-center`;

const Section = tw.section`flex flex-col space-y-2 w-full justify-center items-center`;
const UpperSection = tw.section`col-span-2 flex divide-x-2 divide-gray-300`;
const SectionTitle = tw.span`uppercase`;
const Number = tw.span`text-3xl font-semibold`;

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

        <DetailsGrid>
          <UpperSection>
            <Section>
              <SectionTitle>Base Experience</SectionTitle>
              <Number>{pokemon.base_experience}</Number>
            </Section>
            <Section>
              <SectionTitle>Height</SectionTitle>
              <Number>{pokemon.height}</Number>
            </Section>
            <Section>
              <SectionTitle>Weight</SectionTitle>
              <Number>{pokemon.weight}</Number>
            </Section>
          </UpperSection>

          <Section tw="col-span-2">
            <SectionTitle>Statistics</SectionTitle>
            <StatsList pokemon={pokemon} extended />
          </Section>

          <Section tw="col-span-2">
            <SectionTitle>Types</SectionTitle>
            <TypesList pokemon={pokemon} big />
          </Section>

          <Section tw="col-span-2">
            <SectionTitle>Abilities</SectionTitle>
            <AbilitiesList pokemon={pokemon} />
          </Section>
        </DetailsGrid>

        {nextButton}
      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
