import path from 'path';
import fs from 'fs/promises';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { DataTypes } from '../types/webtoon-types';
import { InferGetStaticPropsType } from 'next';
import { webtoonState } from '../states/webtoonState';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeContainer from '../components/home/HomeContainer';

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Header />
      <HomeContainer webtoon={props.webtoon} />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'webtoon.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: DataTypes[] = JSON.parse(jsonData);

  if (!data)
    return {
      redirect: {
        destination: '/no-data',
      },
    };

  if (!data.length) return { notFound: true };

  return {
    props: {
      webtoon: data,
    },
  };
};

export default HomePage;
