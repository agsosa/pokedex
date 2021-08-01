import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import tw from 'twin.macro';

import usePokedex from '@/lib/usePokedex';

import Card from '@/components/pokemon/Card';
import PageContainer from '@/components/layout/PageContainer';
import MainContainer from '@/components/layout/MainContainer';

const Footer = tw.footer`p-5 flex justify-center items-center w-full my-auto`;
const CardsContainer = tw.div`grid grid-cols-4 gap-10 justify-center items-center w-full`;

export default function Home() {
  const { getPokemonsWithDetails } = usePokedex();
  const [data, setData] = React.useState([]);

  const fetchPokemons = async () => {
    const list = await getPokemonsWithDetails();
console.log("list",list)

    if (!list.error) setData(list.data);
    else console.log(list.error); // TODO show error or something
  };

  React.useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PageContainer>
      <MainContainer>
        <CardsContainer>
          {Array.isArray(data) && data.length > 0 && data.map((d) => <Card pokemon={d} />)}
        </CardsContainer>
      </MainContainer>

      <Footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </Footer>
    </PageContainer>
  );
}
