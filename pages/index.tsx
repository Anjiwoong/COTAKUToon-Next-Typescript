import path from 'path';
import fs from 'fs/promises';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { webtoonState } from '../states/webtoonState';
import { dataTypes } from '../types/webtoon-types';
import { InferGetStaticPropsType } from 'next';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HomeContainer from '../components/home/HomeContainer';

const HomePage = ({
  webtoon,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const setWebtoonList = useSetRecoilState<dataTypes[]>(webtoonState);

  useEffect(() => {
    setWebtoonList(webtoon);
  }, []);

  return (
    <>
      <Header />
      <HomeContainer />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'data', 'webtoon.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  const data: dataTypes[] = JSON.parse(jsonData);

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
