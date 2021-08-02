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

const ContentContainer = tw.section`
flex flex-col justify-between items-center 
h-full w-full z-10 
pt-10 pb-16 lg:px-40`;

const DetailsGrid = tw.div`grid grid-cols-2 gap-10 w-full items-start justify-center`;

const Section = tw.div`flex flex-col space-y-2 w-full justify-center items-center`;
const UpperSection = tw.div`col-span-2 flex divide-x-2 divide-gray-300`;
const SectionTitle = tw.h4`uppercase `;
const Number = tw.span`text-2xl md:text-3xl font-semibold`;

const BtnContainer = tw.div`flex space-x-4 items-center justify-center p-5 mt-10`;

export default function DetailsComponent({ pokemon }) {
  // TODO: Add next button ID limit condition
  const previousButton = (
    <Link href={`/pokemons/details/${pokemon.id - 1}`}>
      <Button left={<AiOutlineArrowLeft />} label='Previous' />
    </Link>
  );

  const nextButton = (
    <Link href={`/pokemons/details/${pokemon.id + 1}`}>
      <Button right={<AiOutlineArrowRight />} label='Next' />
    </Link>
  );

  return (
    <PageContainer>
      {pokemon.id != null && <DetailsHeader pokemon={pokemon} />}

      <ContentContainer>
        <DetailsGrid>
          <UpperSection>
            <Section>
              <SectionTitle>Base Exp.</SectionTitle>
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

        <BtnContainer>{pokemon.id > 1 && previousButton}  {nextButton}</BtnContainer>

      </ContentContainer>

      <Footer />
    </PageContainer>
  );
}
